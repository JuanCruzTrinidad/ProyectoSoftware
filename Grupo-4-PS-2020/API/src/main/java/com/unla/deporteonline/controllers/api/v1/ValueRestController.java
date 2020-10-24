package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Valoracion;
import com.unla.deporteonline.services.IValueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/value")
public class ValueRestController {

	@Autowired
	@Qualifier("valueService")
	private IValueService valueService;

    /*create Value
    @PostMapping(value ="/createValue", consumes="application/json")
    public Object createValue(@RequestParam("fk_user") int fk_user, @RequestParam("fk_producto") int fk_producto, @RequestParam("valoracion") int valoracion, @RequestParam("comentario") String comentario) {
	    Valoracion val = new Valoracion(fk_user, fk_producto, valoracion, comentario);
	    return valueService.saveValue(val);
	}
	*/

	@PostMapping(value ="/createValue", consumes="application/json")
    public Object createValue(@RequestBody Valoracion createValue) {
	    System.out.println("Value: " + createValue.toString());
	    return valueService.saveValue(createValue);
    }
	//traer valoracion por id producto
	@GetMapping("/ValueProduct") 
	public List<Valoracion> findProductById(@RequestParam("fk_producto") int fk_producto) {
		return valueService.findByProduct(fk_producto);
	}
}