package com.unla.deporteonline.services.implementation;

import com.unla.deporteonline.entities.Role;
import com.unla.deporteonline.repositories.IRoleRepository;
import com.unla.deporteonline.services.IRoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("roleService")
public class RoleService implements IRoleService {

	@Autowired
	@Qualifier("roleRepository")
	private IRoleRepository roleRepository;


	public Role findById(int id){
		return roleRepository.findById(id);
	}
}

