package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Discount;
import com.unla.deporteonline.services.IDiscountService;


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
@RequestMapping("/discount")
public class DiscountRestController {

	@Autowired
	@Qualifier("discountService")
	private IDiscountService discountService;

	//add Discount
	@PostMapping(value ="/createDiscount", consumes="application/json")
	public Object createDiscount(@RequestBody Discount createDiscount) {
		System.out.println("Discount: " + createDiscount.toString());
		return discountService.saveDiscount(createDiscount);
	}

	//update Discount
	@PostMapping(value ="/updateDiscount", consumes="application/json")
	public Object updateDiscount(@RequestBody Discount updateDiscount) {
		System.out.println("update Discount: " + updateDiscount.toString());
		return discountService.saveDiscount(updateDiscount);
	}


	//Delete Discount
	@DeleteMapping(value ="/deleteDiscount")
	public String deleteDiscountPhysical(@RequestParam("idDiscount") Integer idDiscount){
		discountService.deleteDiscount(idDiscount);
		return ("Discount deleted");
	}

	//traer descuento por id
	@GetMapping("/discountId") 
		public Discount findDiscountById(@RequestParam("idDiscount") int idDiscount) {
			return discountService.findDiscountById(idDiscount);
		}

	@GetMapping("/discountByCode")
		public float findDiscountByCode(@RequestParam("code") String code){
			return discountService.findDiscountByCode(code);
		}

	//Traes todos los descuentos
	@GetMapping("/allDiscount")
	public List<Discount> findAll(){
		return discountService.findAll();
	}

}