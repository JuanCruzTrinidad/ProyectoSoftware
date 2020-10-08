package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("ProductRepository") 
public interface IProductRepository extends JpaRepository<Producto, Serializable> {

    @Query("SELECT p FROM Producto p WHERE p.precioOferta > 0 ")
    public abstract List<Producto> findPromotion();
    
    @Query("SELECT p FROM Producto p WHERE p.visible = true ")
    public abstract List<Producto> findAllProduct();

    @Query("SELECT p FROM Producto p WHERE p.subcategory.idSubcategory = :idSubcategory and p.visible = true")
    public abstract List<Producto> findProductBySubcategory(@Param("idSubcategory") int idSubcategory);
    
    @Query("SELECT p FROM Producto p WHERE p.subcategory.category.idCategory = :idCategory and p.visible = true")
	public abstract List<Producto> findProductByCategory(@Param("idCategory") int idCategory);

}