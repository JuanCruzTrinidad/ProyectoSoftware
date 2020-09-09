package com.unla.deporteonline.models;

import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;

public class UserModel {

    private int id;

    private String name;

    private String lastname;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthdate;

    private String email;

    private String password;

    private boolean islogged;

    public UserModel() {}

    public UserModel(int id, String name, String lastname, LocalDate birthdate, String email, String password,
            boolean islogged) {
        this.setId(id);
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.islogged = islogged;
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

}
