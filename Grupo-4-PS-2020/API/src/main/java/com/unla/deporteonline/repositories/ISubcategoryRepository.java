package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("SubcategoryRepository") 
public interface ISubcategoryRepository extends JpaRepository<Subcategory, Serializable> {

    @Query("SELECT s FROM Subcategory s WHERE s.category.idCategory = :idCategory")
	public abstract List<Subcategory> findSubcategoryByCategory(@Param("idCategory") int idCategory);

}