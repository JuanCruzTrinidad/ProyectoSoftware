package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Direction;
import java.util.List;


public interface IDirectionService {

   public Object saveDirection(Direction direction);
	
	public Direction findDirectionById(final int id);

	public void deleteDirection(Integer directionId);
	
	public List<Direction> findAll();
    
}