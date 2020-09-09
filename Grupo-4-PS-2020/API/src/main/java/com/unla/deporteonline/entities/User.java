package com.unla.deporteonline.entities;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name= "name")
    //@NotNull
    private String name;

    @Column(name= "lastname")
    private String lastname;

    @Column(name= "birthdate")
    private LocalDate birthdate;

    @Column(name= "email")
    private String email;

    @Column(name= "password")
    private String password;

    @Column(name= "islogged")
    private boolean islogged;

    public User() {}


}