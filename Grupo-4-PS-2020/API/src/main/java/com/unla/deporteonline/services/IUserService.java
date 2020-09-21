package com.unla.deporteonline.services;

import java.util.List;

import com.unla.deporteonline.entities.User;

public interface IUserService {
    
    public List<User> findAll();

    public Object saveUser(User user);

    public User findByEmailAndPassword(String email, String password);

	public User findByEmail(String email);

	public User findById(int id);

}
