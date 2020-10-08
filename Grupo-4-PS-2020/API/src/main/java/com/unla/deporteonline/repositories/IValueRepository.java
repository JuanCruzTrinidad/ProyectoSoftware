package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("ValueRepository") 
public interface IValueRepository extends JpaRepository<Valoracion, Serializable> {


    @Query("SELECT u FROM Valoracion u WHERE u.fk_producto = :fk_producto")
	public abstract List<Valoracion> findByProduct(@Param("fk_producto") int fk_producto);
    

}