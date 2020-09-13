package com.unla.deporteonline.controllers.api.v1;

import com.unla.deporteonline.models.Item;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@PostMapping("/helloPost")
	public ResponseEntity<String> postHello (@RequestBody Item item){
		//String aux = "Usuario: " + item.getName() +"Contraseña: "+item.getPassword();
		if(!item.getPassword().isEmpty()){
			return new ResponseEntity<String>("Logeado", HttpStatus.OK);
		}
		return new ResponseEntity<String>("No escribiste la contraseña gil.", HttpStatus.OK);
	}
}
