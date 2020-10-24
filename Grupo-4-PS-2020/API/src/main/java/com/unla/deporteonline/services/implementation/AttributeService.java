package com.unla.deporteonline.services.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Atributos;
import com.unla.deporteonline.services.IAttributeService;
import com.unla.deporteonline.repositories.IAttributeRepository;

import java.util.List;
@Service("attributeService")
public class AttributeService implements IAttributeService {
    
    @Autowired
	@Qualifier("AttributeRepository")
	private IAttributeRepository iattributeRepository;

	public Object saveAttribute(Atributos atributos) {
		return iattributeRepository.saveAndFlush(atributos);
	}
	
	public Atributos findAttributeById(final int id) {
		return iattributeRepository.findById(id).get();
	}
    
	public List<Atributos> findAll() {
		return iattributeRepository.findAll();
	}

	public void deleteAttribute(Integer attributeId) {
		iattributeRepository.delete(iattributeRepository.findById(attributeId).get());
	}

}


