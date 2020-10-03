package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("CategoryRepository") 
public interface ICategoryRepository extends JpaRepository<Category, Serializable> {
   
  

}