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
	private ICategoryRepository categoryRepository;

	public List<Category> findAll(){
		return categoryRepository.findAll();
	}

	/*public Object saveAttribute(Atributos atributos) {
		return iattributeRepository.saveAndFlush(atributos);
    }
    
	public List<Atributos> findAll() {
		return iattributeRepository.findAll();
	}

	public void deleteAttribute(Integer attributeId) {
		iattributeRepository.delete(iattributeRepository.findById(attributeId).get());
	}
    */
}
