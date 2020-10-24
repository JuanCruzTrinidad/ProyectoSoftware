package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Discount;
import com.unla.deporteonline.services.IDiscountService;
import com.unla.deporteonline.repositories.IDiscountRepository;

import java.util.List;

@Service("discountService")
public class DiscountService implements IDiscountService {
    
    @Autowired
	@Qualifier("DiscountRepository")
	private IDiscountRepository idiscountRepository;

	public Object saveDiscount(Discount discount) {
		return idiscountRepository.saveAndFlush(discount);
	}
	
	public Discount findDiscountById(final int id) {
		return idiscountRepository.findById(id).get();
	}

	public Discount findDiscountByCode(String code){
		return idiscountRepository.findDiscountByCode(code);
	}

	public void deleteDiscount(Integer discountId) {
		idiscountRepository.delete(idiscountRepository.findById(discountId).get());
	}
	
	public List<Discount> findAll(){
		return idiscountRepository.findAll();
	}

}