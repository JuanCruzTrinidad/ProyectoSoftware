package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Category;
import java.util.List;


public interface ICategoryService {

    public Object saveCategory(Category category);

	public Category findCategoryById(final int id);

	public void deleteCategory(Integer categoryId);
	
	public List<Category> findAll();
    
}