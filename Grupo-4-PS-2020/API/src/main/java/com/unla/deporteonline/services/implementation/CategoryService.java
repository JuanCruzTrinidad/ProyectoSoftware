package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Category;
import com.unla.deporteonline.services.ICategoryService;
import com.unla.deporteonline.repositories.ICategoryRepository;

import java.util.List;

@Service("categoryService")
public class CategoryService implements ICategoryService {
    
    @Autowired
	@Qualifier("CategoryRepository")
	private ICategoryRepository icategoryRepository;

	public Object saveCategory(Category category) {
		return icategoryRepository.saveAndFlush(category);
	}
	
	public Category findCategoryById(final int id) {
		return icategoryRepository.findById(id).get();
	}

	public void deleteCategory(Integer categoryId) {
		icategoryRepository.delete(icategoryRepository.findById(categoryId).get());
	}
	
	public List<Category> findAll(){
		return icategoryRepository.findAll();
	}

}
