package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Pedido;
import java.util.List;

public interface IPedidoService {

	public Object savePedido(Pedido pedido);
	
    public Pedido findPedidoById(final int id);
    
    public void deletePedido(Integer pedidoId);
    
    public List<Pedido> findAll();
    
    public List<Pedido> findByUserId(Integer id);

}