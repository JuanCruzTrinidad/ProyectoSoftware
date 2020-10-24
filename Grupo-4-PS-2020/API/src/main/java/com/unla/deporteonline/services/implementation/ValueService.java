package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Valoracion;
import com.unla.deporteonline.services.IValueService;
import com.unla.deporteonline.repositories.IValueRepository;

import java.util.List;

@Service("valueService")
public class ValueService implements IValueService {

	@Autowired
	@Qualifier("ValueRepository")
	private IValueRepository ivalueRepository;

	public Object saveValue(final Valoracion value) {
		return ivalueRepository.save(value);
	}

	public List<Valoracion> findByProduct(final int fk_producto) {
		return ivalueRepository.findByProduct(fk_producto);
	}
}