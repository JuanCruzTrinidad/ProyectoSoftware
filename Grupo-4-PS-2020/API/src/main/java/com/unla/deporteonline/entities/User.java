package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
//import java.util.AbstractSet;

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
    
  @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private Set<UserRole> userRoles = new HashSet<UserRole>();

 

    public User(int id, String name, String lastname, LocalDate birthdate, String email, String password,
            boolean islogged, Set<UserRole> userRoles) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.islogged = islogged;
        this.userRoles = userRoles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isIslogged() {
        return islogged;
    }

    public void setIslogged(boolean islogged) {
        this.islogged = islogged;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public User(int id, String name, String lastname, LocalDate birthdate, String email, String password,
            boolean islogged) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.islogged = islogged;
    }

    

}