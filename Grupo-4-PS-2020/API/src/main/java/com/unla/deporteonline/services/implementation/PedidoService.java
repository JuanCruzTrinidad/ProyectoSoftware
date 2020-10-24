package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Pedido;
import com.unla.deporteonline.services.IPedidoService;
import com.unla.deporteonline.repositories.IPedidoRepository;

import java.util.List;

@Service("pedidoService")
public class PedidoService implements IPedidoService {
    
    @Autowired
	@Qualifier("PedidoRepository")
	private IPedidoRepository ipedidoRepository;

	public Object savePedido(Pedido pedido) {
		return ipedidoRepository.saveAndFlush(pedido);
	}
	
	public Pedido findPedidoById(final int id) {
		return ipedidoRepository.findById(id).get();
	}

	public void deletePedido(Integer pedidoId) {
		ipedidoRepository.delete(ipedidoRepository.findById(pedidoId).get());
	}
	
	public List<Pedido> findAll(){
		return ipedidoRepository.findAll();
	}

	public List<Pedido> findByUserId(Integer id){
		return ipedidoRepository.findByUserId(id);
	}

}