package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Pedido;
import com.unla.deporteonline.services.IPedidoService;
import com.unla.deporteonline.entities.User;
import com.unla.deporteonline.services.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

	//add Pedido
	@PostMapping(value ="/createPedido", consumes="application/json")
	public Object createPedidoVacio() {
        
        Pedido createPedido = new Pedido();
        //createPedido.setIdPedido(1);
        //createPedido.setUser(userService.findById(idUser));
		return pedidoService.savePedido(createPedido);
	}

	/* /update Pedido
	@PostMapping(value ="/updatePedido", consumes="application/json")
	public Object updatePedido(@RequestBody Pedido updatePedido) {
		System.out.println("update Pedido: " + updatePedido.toString());
		return pedidoService.savePedido(updatePedido);
    }
    */


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


}