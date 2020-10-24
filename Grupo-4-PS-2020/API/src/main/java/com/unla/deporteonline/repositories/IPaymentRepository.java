package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;

    
@Repository("PaymentRepository") 
public interface IPaymentRepository extends JpaRepository<Payment, Serializable> {
   
 
}

