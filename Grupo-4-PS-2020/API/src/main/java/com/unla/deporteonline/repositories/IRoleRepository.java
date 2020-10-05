package com.unla.deporteonline.repositories;

import java.io.Serializable;

import com.unla.deporteonline.entities.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("roleRepository")
@EnableJpaRepositories
public interface IRoleRepository extends JpaRepository<Role, Serializable>{
    
    public abstract Role findById(@Param("id") int id);
    
}
