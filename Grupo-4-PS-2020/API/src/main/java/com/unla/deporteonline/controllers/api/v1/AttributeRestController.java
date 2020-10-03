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

//Modificar Atributo
@PostMapping(value ="/createAttribute", consumes="application/json")
public Object createAttribute(@RequestBody Atributos createAttribute) {
	System.out.println("Attribute: " + createAttribute.toString());
	return attributeService.saveAttribute(createAttribute);
}


//Delete Attribute
@DeleteMapping(value ="/deleteAttribute")
public String deleteAttributePhysical(@RequestParam("attributeId") Integer attributeId){
	attributeService.deleteAttribute(attributeId);
	return ("Atributo eliminado");
}



@GetMapping("/allattribute") //Traes todos los atrbiutos
	public List<Atributos> findAll() {
		return attributeService.findAll();
	}

}
