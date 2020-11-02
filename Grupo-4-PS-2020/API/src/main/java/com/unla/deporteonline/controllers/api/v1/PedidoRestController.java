package com.unla.deporteonline.controllers.api.v1;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import com.unla.deporteonline.entities.DetallePedido;
import com.unla.deporteonline.entities.Direction;
import com.unla.deporteonline.entities.Pedido;
import com.unla.deporteonline.services.IDetallePedidoService;
import com.unla.deporteonline.services.IDirectionService;
import com.unla.deporteonline.services.IPedidoService;
import com.unla.deporteonline.entities.User;
import com.unla.deporteonline.services.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.micrometer.core.ipc.http.HttpSender.Response;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/pedido")
public class PedidoRestController {

	@Autowired
	@Qualifier("pedidoService")
	private IPedidoService pedidoService;

    @Autowired
	@Qualifier("userService")
	private IUserService userService;
	
	@Autowired
	@Qualifier("directionService")
	private IDirectionService directionService;

	@Autowired
	@Qualifier("detallePedidoService")
	private IDetallePedidoService detallePedidoService;
    
    @Value("${apiKey.sendGrid}")
    private String keySendGrid;
    
	//add Pedido,recibe idUser, busca user por id
	@PostMapping(value ="/createPedidoVacio")
	public Object createPedidoVacio(@RequestParam("idUser") Integer idUser) {
		Pedido createPedido = new Pedido();
		createPedido.setUser(userService.findById(idUser));
		
		return pedidoService.savePedido(createPedido);
    }
    
    //add Pedido (recibe el Pedido por json, necesita el user)(o idUser en json)
    @PostMapping(value ="/createPedido", consumes="application/json")
    public Object createPedido(@RequestBody Pedido pedido) throws IOException {
		return pedidoService.savePedido(pedido);
    }

	//traer Pedido por id
	@GetMapping("/pedidomail")
	public String sendEmailPedido(@RequestParam("idPedido") int idPedido) throws IOException {
		
		Pedido pedido = pedidoService.findPedidoById(idPedido);

		List<DetallePedido> detped = detallePedidoService.findByPedido(idPedido);		

		System.out.println("DETALLE PEDIDO:" + detped);

		List<DetallePedido> detallepedido = new ArrayList<DetallePedido>();

		for(int i=0; i < detped.size(); i++){
			DetallePedido dp = new DetallePedido();
			int cant = detallePedidoService.traerCantidadPedido(idPedido, detped.get(i).getFk_atributos());
			dp.setFk_atributos(detped.get(i).getFk_atributos());
			dp.setFk_pedido(idPedido);
			dp.setCantidad(cant);

			detallepedido.add(dp);
		}

		User user = userService.findById(pedido.getUser().getId());
		Direction direction = directionService.findDirectionById(pedido.getDirection().getIdDirection());

		Email from = new Email("natt.photograph@gmail.com");
		String subject = "Pedido Nro. " + pedido.getIdPedido();
		Email to = new Email("natt.photograph@gmail.com");
		Content content = new Content("text/html", "ID pedido: " + pedido.getIdPedido() + ".<br/> Fecha: " + LocalDate.now() + ".<br/> Usuario: " + user.getEmail() + ".<br/> Dirección: " + direction.getStreet() + " " + direction.getNumber() + ", " + direction.getLocation() + ", " + direction.getProvince() + ".<br/> Productos: " + detallepedido + ".<br/> Total: $ " + pedido.getTotal() + ".<br/> Comentario: " + pedido.getComent());
		Mail mail = new Mail(from, subject, to, content);

		SendGrid sg = new SendGrid(keySendGrid);
		Request request = new Request();

		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			com.sendgrid.Response response = sg.api(request);
			System.out.println(response.getStatusCode());
			System.out.println(response.getBody());
			System.out.println(response.getHeaders());
		} catch (IOException ex) {
			throw ex;
		}
		
		return ("Mail enviado");
	}	


	//update Pedido
	@PostMapping(value ="/updatePedido", consumes="application/json")
	public Object updatePedido(@RequestBody Pedido updatePedido) {
		System.out.println("update Pedido: " + updatePedido.toString());
		return pedidoService.savePedido(updatePedido);
    }
   
	//Delete Pedido
	@DeleteMapping(value ="/deletePedido")
	public String deletePedidoPhysical(@RequestParam("idPedido") Integer idPedido){
		pedidoService.deletePedido(idPedido);
		return ("Pedido eliminado");
	}

	//traer Pedido por id
	@GetMapping("/pedidoId") 
		public Pedido findPedidoById(@RequestParam("idPedido") int id) {
			return pedidoService.findPedidoById(id);
		}

	//Traes todos los pedidos
	@GetMapping("/allPedidos")
	public List<Pedido> findAll(){
		return pedidoService.findAll();
	}

	//traer pedidos por id usuario
	@GetMapping("/pedidoByUserId")
	public List<Pedido> pedidoByUserId(@RequestParam("id") int id){
		return pedidoService.findByUserId(id);
	}


}