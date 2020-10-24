package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("PedidoRepository") 
public interface IPedidoRepository extends JpaRepository<Pedido, Serializable> {
   
    @Query("SELECT p FROM Pedido p WHERE p.user.id = :id")
	public abstract List<Pedido> findByUserId(@Param("id") int id);
    

}