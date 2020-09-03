package com.unla.deporteonline.controllers.api.v1;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/test")
public class TestRestController {

	@GetMapping("/hello")
	public ResponseEntity<String> testHello(){
		String aux = "Hola muy buenas tardes";
		return new ResponseEntity<String>(aux, HttpStatus.OK);
	}
}
