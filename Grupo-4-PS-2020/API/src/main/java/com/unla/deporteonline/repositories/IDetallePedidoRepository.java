package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("DetallePedidoRepository") 
public interface IDetallePedidoRepository extends JpaRepository<DetallePedido, Serializable> {
   
    //traer por pedido
    @Query("SELECT d FROM DetallePedido d WHERE d.fk_pedido = :fk_pedido")
	public abstract List<DetallePedido> findByPedido(@Param("fk_pedido") int fk_pedido);
    
    
    @Query("SELECT d FROM DetallePedido d WHERE d.fk_pedido = :fk_pedido and d.fk_atributos = :fk_atributos")
	public abstract DetallePedido traerDetallePedido(@Param("fk_pedido") int fk_pedido, @Param("fk_atributos") int fk_atributos);
    
}