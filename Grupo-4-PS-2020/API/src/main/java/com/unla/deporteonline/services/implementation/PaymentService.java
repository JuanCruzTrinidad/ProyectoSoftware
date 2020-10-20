package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Payment;
import com.unla.deporteonline.services.IPaymentService;
import com.unla.deporteonline.repositories.IPaymentRepository;

import java.util.List;

@Service("paymentService")
public class PaymentService implements IPaymentService {
    
    @Autowired
	@Qualifier("PaymentRepository")
	private IPaymentRepository ipaymentRepository;

	public Object savePayment(Payment payment) {
		return ipaymentRepository.saveAndFlush(payment);
	}
	
	public Payment findPaymentById(final int id) {
		return ipaymentRepository.findById(id).get();
	}

	public void deletePayment(Integer paymentId) {
		ipaymentRepository.delete(ipaymentRepository.findById(paymentId).get());
	}
	
	public List<Payment> findAll(){
		return ipaymentRepository.findAll();
	}

}

