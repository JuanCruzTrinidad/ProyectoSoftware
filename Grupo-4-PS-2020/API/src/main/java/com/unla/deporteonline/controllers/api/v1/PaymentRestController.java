package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Payment;
import com.unla.deporteonline.services.IPaymentService;

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
@RequestMapping("/payment")
public class PaymentRestController {

	@Autowired
	@Qualifier("paymentService")
	private IPaymentService paymentService;

	//add payment
	@PostMapping(value ="/createPayment", consumes="application/json")
	public Object createPayment(@RequestBody Payment createPayment) {
		System.out.println("Payment: " + createPayment.toString());
		return paymentService.savePayment(createPayment);
	}

	//update Payment
	@PostMapping(value ="/updatePayment", consumes="application/json")
	public Object updatePayment(@RequestBody Payment updatePayment) {
		System.out.println("update Payment: " + updatePayment.toString());
		return paymentService.savePayment(updatePayment);
	}


	//Delete Payment
	@DeleteMapping(value ="/deletePayment")
	public String deletePaymentPhysical(@RequestParam("idPayment") Integer idPayment){
		paymentService.deletePayment(idPayment);
		return ("Payment deleted");
	}

	//traer Payment por id
	@GetMapping("/PaymentId") 
		public Payment findPaymentById(@RequestParam("idPayment") int idPayment) {
			return paymentService.findPaymentById(idPayment);
		}

	//Traes todos los Payment
	@GetMapping("/allPayment")
	public List<Payment> findAll(){
		return paymentService.findAll();
	}


}