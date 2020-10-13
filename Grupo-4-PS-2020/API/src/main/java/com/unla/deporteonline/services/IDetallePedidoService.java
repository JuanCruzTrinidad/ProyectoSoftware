package com.unla.deporteonline.services;
import com.unla.deporteonline.entities.DetallePedido;
import java.util.List;

public interface IDetallePedidoService {
    public Object saveDetallePedido(DetallePedido detallePedido);
    
    //traer todos los DetallePedido de un pedido
    public List<DetallePedido> findByPedido(final int fk_pedido);

	public void deleteDetallePedido(Integer pedidoId, Integer atributosId);
    
	public List<DetallePedido> findAll();
}
