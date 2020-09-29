package com.unla.deporteonline.repositories;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.unla.deporteonline.entities.*;


@Repository("userRepository")
public interface IUserRepository extends JpaRepository<User, Serializable> {

	@Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.email = (:email)")
	public abstract User findByEmailAndFetchUserRolesEagerly(@Param("email") String email);

	@Query("SELECT u FROM User u WHERE u.email = :email and u.password = :password and enabled = true")
	public abstract User findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	@Query("SELECT u FROM User u WHERE u.enabled = true")
	public abstract List<User> findByIsEnabled();
}