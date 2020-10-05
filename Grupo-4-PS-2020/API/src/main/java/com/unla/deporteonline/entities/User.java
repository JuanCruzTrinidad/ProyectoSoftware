package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name= "name", nullable = false)
    private String name;

    @Column(name= "lastname", nullable = false)
    private String lastname;

    @Column(name= "birthdate", nullable = false)
    private LocalDate birthdate;

    @Column(name= "email", nullable = false)
    private String email;

    @Column(name= "password", nullable = false)
    private String password;

    @Column(name= "enabled")
    private boolean enabled;

    @Column(name= "islogged")
    private boolean islogged;

    @ManyToMany
    @JoinTable(name = "role_user", 
            joinColumns = @JoinColumn(name = "user_id"), 
            inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<Role>();

    //valoracion
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "user")
    private Set<Valoracion> valoraciones= new HashSet<Valoracion>();
    
    public User() {}

    public User(int id, String name, String lastname, LocalDate birthdate, String email, String password, boolean enabled,
            boolean islogged, Set<Role> roles) {
        this.setId(id);
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.islogged = islogged;
        this.enabled = enabled;
        this.roles = roles;
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

    public boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @JsonManagedReference (value = "anyName")
    public Set<Valoracion> getValoraciones() {
        return valoraciones;
    }

    public void setValoraciones(Set<Valoracion> valoraciones) {
        this.valoraciones = valoraciones;
    }


    @Override
    public String toString() {
        return "User [birthdate=" + birthdate + ", email=" + email + ", enabled=" + enabled + ", id=" + id
                + ", lastname=" + lastname + ", name=" + name + ", password=" + password + ", roles=" + roles + "]";
    }
}