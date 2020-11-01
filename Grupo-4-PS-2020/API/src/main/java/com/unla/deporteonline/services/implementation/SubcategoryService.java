package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Subcategory;
import com.unla.deporteonline.services.ISubcategoryService;
import com.unla.deporteonline.repositories.ISubcategoryRepository;

import java.util.List;

@Service("subcategoryService")
public class SubcategoryService implements ISubcategoryService {
    
    @Autowired
	@Qualifier("SubcategoryRepository")
	private ISubcategoryRepository isubcategoryRepository;

	public Object saveSubcategory(Subcategory subcategory) {
		return isubcategoryRepository.saveAndFlush(subcategory);
	}
	
	public Subcategory findSubcategoryById(final int id) {
		return isubcategoryRepository.findById(id).get();
	}

	public void deleteSubcategory(Integer subcategoryId) {
		isubcategoryRepository.delete(isubcategoryRepository.findById(subcategoryId).get());
	}
	
	public List<Subcategory> findAll(){
		return isubcategoryRepository.findAll();
	}

	public List<Subcategory> findSubcategoryByCategory(final int idCategory){
		return isubcategoryRepository.findSubcategoryByCategory(idCategory);	
	}

	public Subcategory findSubcategoryByName(final String name) {
		return isubcategoryRepository.findSubcategoryByName(name);
	}

}