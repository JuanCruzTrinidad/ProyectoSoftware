package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Discount;
import java.util.List;


public interface IDiscountService {

   public Object saveDiscount(Discount discount);
	
	public Discount findDiscountById(final int id);

	public void deleteDiscount(Integer discountId);
	
	public List<Discount> findAll();

	public float findDiscountByCode(String code);
    
}