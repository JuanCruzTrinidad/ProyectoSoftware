package com.unla.deporteonline.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.DetallePedido;
import com.unla.deporteonline.services.IDetallePedidoService;
import com.unla.deporteonline.repositories.IDetallePedidoRepository;

import java.util.ArrayList;
import java.util.List;

@Service("detallePedidoService")
public class DetallePedidoService implements IDetallePedidoService {

	@Autowired
	@Qualifier("DetallePedidoRepository")
	private IDetallePedidoRepository idetallePedidoRepository;

	public Object saveDetallePedido(DetallePedido detallePedido) {
		return idetallePedidoRepository.saveAndFlush(detallePedido);
	}

	// traer todos los DetallePedido de un pedido
	public List<DetallePedido> findByPedido(int fk_pedido) {
		List<DetallePedido> detallepedido = new ArrayList<DetallePedido>();
		List<Integer> listint = idetallePedidoRepository.findByPedido(fk_pedido);
		for (int i = 0; i < listint.size(); i++) {
			DetallePedido dp = new DetallePedido();
			dp.setFk_pedido(fk_pedido);
			dp.setFk_atributos(listint.get(i));
			dp.setCantidad(0);
			detallepedido.add(dp);
		}
		return detallepedido;
	}

	public Integer traerCantidadPedido(int fk_pedido, int fk_atributos) {
		return idetallePedidoRepository.traerCantidadPedido(fk_pedido, fk_atributos);
	}

	public void deleteDetallePedido(Integer pedidoId, Integer atributosId) {
		idetallePedidoRepository.delete(idetallePedidoRepository.traerDetallePedido(pedidoId, atributosId));
	}

	public List<DetallePedido> findAll() {
		return idetallePedidoRepository.findAll();
	}
}
