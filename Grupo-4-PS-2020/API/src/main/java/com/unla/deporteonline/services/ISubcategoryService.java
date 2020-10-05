package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Subcategory;
import java.util.List;


public interface ISubcategoryService {

    public Object saveSubcategory(Subcategory subcategory);
	
	public Subcategory findSubcategoryById(final int id);

	public void deleteSubcategory(Integer subcategoryId);
	
	public List<Subcategory> findAll();
    
}