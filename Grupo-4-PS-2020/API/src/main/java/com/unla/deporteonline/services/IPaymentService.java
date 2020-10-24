package com.unla.deporteonline.services;

import java.util.List;

import com.unla.deporteonline.entities.*;

public interface IPaymentService {
    public Object savePayment(Payment payment) ;
	
	public Payment findPaymentById(final int id);

	public void deletePayment(Integer paymentId);
	
	public List<Payment> findAll();
}
