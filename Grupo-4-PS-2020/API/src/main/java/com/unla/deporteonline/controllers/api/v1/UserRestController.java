package com.unla.deporteonline.controllers.api.v1;

import java.util.ArrayList;
import java.util.List;

import com.unla.deporteonline.entities.User;
import com.unla.deporteonline.services.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/user")
public class UserRestController {
    
    @Autowired
    @Qualifier("userService")
    private IUserService userService;


    //EndPoint para logear

    //EndPoint para registro

    //EndPoint para recuperar password


    //Test clase user
    // @GetMapping("/all")
	// public ResponseEntity<List<User>> allUsers(){
    //     List<User> users = new ArrayList<User>();
    //     users.add(userService.getAll());
	// 	return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	// }

    @GetMapping("/all")
    public List<User> findAll() {
        return userService.findAll();
    }

}
