package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Subcategory;
import com.unla.deporteonline.services.ISubcategoryService;
import com.unla.deporteonline.repositories.ISubcategoryRepository;

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
@RequestMapping("/subcategory")
public class SubcategoryRestController {

	@Autowired
	@Qualifier("subcategoryService")
	private ISubcategoryService subcategoryService;

	//add subcategory
	@PostMapping(value ="/createSubcategory", consumes="application/json")
	public Object createSubcategory(@RequestBody Subcategory createSubcategory) {
		System.out.println("Subcategory: " + createSubcategory.toString());
		return subcategoryService.saveSubcategory(createSubcategory);
	}

	//update Subcategory
	@PostMapping(value ="/updateSubcategory", consumes="application/json")
	public Object updateSubcategory(@RequestBody Subcategory updateSubcategory) {
		System.out.println("update subcategory: " + updateSubcategory.toString());
		return subcategoryService.saveSubcategory(updateSubcategory);
	}

	//Delete Subcategory
	@DeleteMapping(value ="/deleteSubcategory")
	public String deleteSubcategoryPhysical(@RequestParam("idSubcategory") Integer idSubcategory){
		subcategoryService.deleteSubcategory(idSubcategory);
		return ("Subcategoria eliminada");
	}

	//traer subcategoria por id
	@GetMapping("/subcategoryId") 
		public Subcategory findSubcategoryById(@RequestParam("idSubCategory") int id) {
			return subcategoryService.findSubcategoryById(id);
		}

	//Traes todas las subcategorias
	@GetMapping("/allsubcategories")
	public List<Subcategory> findAll(){
		return subcategoryService.findAll();
	}

}