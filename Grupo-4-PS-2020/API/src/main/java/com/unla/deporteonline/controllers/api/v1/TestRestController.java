package com.unla.deporteonline.controllers.api.v1;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
@CrossOrigin(origins = "http://localhost:3000")
public class TestRestController {

	@GetMapping("/hello")
	
	public String testHello(){
		String aux = "Hola muy buenas tardes";
		return aux;
	}
}
