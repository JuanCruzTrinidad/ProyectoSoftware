package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Atributos;
import com.unla.deporteonline.services.IAttributeService;

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
@CrossOrigin("*")
@RequestMapping("/attribute")
public class AttributeRestController {

	@Autowired
	@Qualifier("attributeService")
	private IAttributeService attributeService;

//Agregar Atributo
@PostMapping(value ="/createAttribute", consumes="application/json")
public String createAttribute(@RequestBody List<Atributos> createAttribute) {
	System.out.println("Attributes: " + createAttribute.toString());
	for(Atributos a: createAttribute) {
		attributeService.saveAttribute(a);
	}
	return "Atributos creados";
}

//update Atributo
@PostMapping(value ="/updateAttribute", consumes="application/json")
public Object updateAttribute(@RequestBody List<Atributos> updateAttribute) {
    System.out.println("update atributes: " + updateAttribute.toString());
	for(Atributos a: updateAttribute) {
		attributeService.saveAttribute(a);
	}
	return "Atributos udpateados";
}


//Delete Attribute
@DeleteMapping(value ="/deleteAttribute")
public String deleteAttributePhysical(@RequestParam("attributeId") Integer attributeId){
	attributeService.deleteAttribute(attributeId);
	return ("Atributo eliminado");
}

//traer atributo por id
@GetMapping("/AttributeId") //Traes todos los atrbiutos
	public Atributos findAttributeById(@RequestParam("idProducto") int id) {
		return attributeService.findAttributeById(id);
	}

//Traes todos los atrbiutos
@GetMapping("/allattribute") 
	public List<Atributos> findAll() {
		return attributeService.findAll();
	}

}
