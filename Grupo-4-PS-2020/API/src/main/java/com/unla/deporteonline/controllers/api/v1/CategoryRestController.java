package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Category;
import com.unla.deporteonline.services.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/category")
public class CategoryRestController {

	@Autowired
	@Qualifier("categoryService")
	private ICategoryService categoryService;

	//add category
	@PostMapping(value ="/createCategory", consumes="application/json")
	public Object createCategory(@RequestBody Category createCategory) {
		System.out.println("Category: " + createCategory.toString());
		return categoryService.saveCategory(createCategory);
	}

	//update Category
	@PostMapping(value ="/updateCategory", consumes="application/json")
	public Object updateCategory(@RequestBody Category updateCategory) {
		System.out.println("update category: " + updateCategory.toString());
		return categoryService.saveCategory(updateCategory);
	}


	//Delete Category
	@DeleteMapping(value ="/deleteCategory")
	public String deleteCategoryPhysical(@RequestParam("idCategory") Integer idCategory){
		categoryService.deleteCategory(idCategory);
		return ("Categoria eliminado");
	}

	//traer categoria por id
	@GetMapping("/categoryId") 
		public Category findCategoryById(@RequestParam("idCategory") int id) {
			return categoryService.findCategoryById(id);
		}

	//Traes todas las categorias
	@GetMapping("/allcategories")
	public List<Category> findAll(){
		return categoryService.findAll();
	}


}