package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Direction;
import com.unla.deporteonline.services.IDirectionService;
import com.unla.deporteonline.repositories.IDirectionRepository;

import java.util.List;

@Service("directionService")
public class DirectionService implements IDirectionService {
    
    @Autowired
	@Qualifier("DirectionRepository")
	private IDirectionRepository idirectionRepository;

	public Object saveDirection(Direction direction) {
		return idirectionRepository.saveAndFlush(direction);
	}
	
	public Direction findDirectionById(final int id) {
		return idirectionRepository.findById(id).get();
	}

	public void deleteDirection(Integer directionId) {
		idirectionRepository.delete(idirectionRepository.findById(directionId).get());
	}
	
	public List<Direction> findAll(){
		return idirectionRepository.findAll();
	}

}