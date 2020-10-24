package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Direction;
import com.unla.deporteonline.services.IDirectionService;


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
@RequestMapping("/direction")
public class DirectionRestController {

	@Autowired
	@Qualifier("directionService")
	private IDirectionService directionService;

	//add direction
	@PostMapping(value ="/createDirection", consumes="application/json")
	public Object createDirection(@RequestBody Direction createDirection) {
		System.out.println("Direction: " + createDirection.toString());
		return directionService.saveDirection(createDirection);
	}

	//update Direction
	@PostMapping(value ="/updateDirection", consumes="application/json")
	public Object updateDirection(@RequestBody Direction updateDirection) {
		System.out.println("update direction: " + updateDirection.toString());
		return directionService.saveDirection(updateDirection);
	}


	//Delete Direction
	@DeleteMapping(value ="/deleteDirection")
	public String deleteDirectionPhysical(@RequestParam("idDirection") Integer idDirection){
		directionService.deleteDirection(idDirection);
		return ("Direction deleted");
	}

	//traer direccion por id
	@GetMapping("/directionId") 
		public Direction findDirectionById(@RequestParam("idDirection") int idDirection) {
			return directionService.findDirectionById(idDirection);
		}

	//Traes todas las direcciones
	@GetMapping("/allDirection")
	public List<Direction> findAll(){
		return directionService.findAll();
	}


}