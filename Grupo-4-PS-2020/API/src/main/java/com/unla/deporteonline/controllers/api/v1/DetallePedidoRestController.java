package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.DetallePedido;
import com.unla.deporteonline.services.IDetallePedidoService;

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
@RequestMapping("/detallePedido")
public class DetallePedidoRestController {

	@Autowired
	@Qualifier("detallePedidoService")
	private IDetallePedidoService detallePedidoService;

	//add detallePedido
	@PostMapping(value ="/createDetallePedido", consumes="application/json")
	public Object createDetallePedido(@RequestBody DetallePedido createDetallePedido) {
		System.out.println("DetallePedido: " + createDetallePedido.toString());
		return detallePedidoService.saveDetallePedido(createDetallePedido);
	}

	//update DetallePedido
	@PostMapping(value ="/updateDetallePedido", consumes="application/json")
	public Object updateDetallePedido(@RequestBody DetallePedido updateDetallePedido) {
		System.out.println("update DetallePedido: " + updateDetallePedido.toString());
		return detallePedidoService.saveDetallePedido(updateDetallePedido);
	}


	//Delete DetallePedido
	@DeleteMapping(value ="/deleteDetallePedido")
	public String deleteDetallePedidoPhysical(@RequestParam("idPedido") Integer idPedido, @RequestParam("idAtributos") Integer idAtributos){
		detallePedidoService.deleteDetallePedido(idPedido, idAtributos);
		return ("DetallePedido eliminado");
	}

	//traer detallePedido por pedido
	@GetMapping("/findByIdPedido") 
    public List<DetallePedido> findByIdPedido(@RequestParam("idPedido") int idPedido) {
        return detallePedidoService.findByPedido(idPedido);
    }

	//Traes todo
	@GetMapping("/allDetallePedido")
	public List<DetallePedido> findAll(){
		return detallePedidoService.findAll();
	}

    

}
