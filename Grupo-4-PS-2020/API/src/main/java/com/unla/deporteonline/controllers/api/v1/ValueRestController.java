package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Valoracion;
import com.unla.deporteonline.services.IValueService;
import com.unla.deporteonline.repositories.IValueRepository;

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
@RequestMapping("/value")
public class ValueRestController {

	@Autowired
	@Qualifier("valueService")
	private IValueService valueService;

    //create Value
    @PostMapping(value ="/createValue", consumes="application/json")
    public Object createValue(@RequestBody Valoracion createValue) {
	    System.out.println("Value: " + createValue.toString());
	    return valueService.saveValue(createValue);
    }
}