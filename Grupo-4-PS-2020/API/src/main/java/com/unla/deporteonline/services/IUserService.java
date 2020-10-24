package com.unla.deporteonline.services;
import com.unla.deporteonline.entities.User;
import java.util.List;

public interface IUserService {
    
    public List<User> findAll();

    public Object saveUser(User user);

    public void deleteUser(User user);

    public User findByEmailAndPassword(String email, String password);	

    public List<User> findByIsEnabled();

    public User findUserById(final int id);
	  
    public User findByEmail(String email);

    public User findById(int id);
}
