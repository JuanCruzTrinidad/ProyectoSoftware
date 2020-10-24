package com.unla.deporteonline.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("DiscountRepository") 
public interface IDiscountRepository extends JpaRepository<Discount, Serializable> {
   
    @Query("SELECT d FROM Discount d WHERE d.code = :code")
	public abstract Discount findDiscountByCode(@Param("code") String code);

 
}