package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.DetallePedido;
import com.unla.deporteonline.services.IDetallePedidoService;
import com.unla.deporteonline.repositories.IDetallePedidoRepository;

import java.util.List;

@Service("detallePedidoService")
public class DetallePedidoService implements IDetallePedidoService {
    
    @Autowired
	@Qualifier("DetallePedidoRepository")
	private IDetallePedidoRepository idetallePedidoRepository;

	public Object saveDetallePedido(DetallePedido detallePedido) {
		return idetallePedidoRepository.saveAndFlush(detallePedido);
	}
    
    //traer todos los DetallePedido de un pedido
    public List<DetallePedido> findByPedido(final int fk_pedido) {
		return idetallePedidoRepository.findByPedido(fk_pedido);
	}


	public void deleteDetallePedido(Integer pedidoId, Integer atributosId) {
        idetallePedidoRepository.delete(idetallePedidoRepository.traerDetallePedido(pedidoId,atributosId));
	}
    

	public List<DetallePedido> findAll(){
		return idetallePedidoRepository.findAll();
    }
    
   

}

