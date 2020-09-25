package com.unla.deporteonline.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name= "producto")
public class Producto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProducto;

    @Column(name="nombre",nullable = false)
    private String nombre;

    @Column(name="descripcionCorta",nullable = false)
    private String descripcionCorta;

    @Column(name="descripcionLarga",nullable = false)
    private String descripcionLarga;

    @Column(name = "visible",nullable = false)
    private boolean visible;

    @OneToOne
    @JoinColumn(name = "idprecio", nullable = false)
    private Precio precio;

    @JoinTable(
        name = "comentario",
        joinColumns = @JoinColumn(name = "fk_producto", nullable = false),
        inverseJoinColumns = @JoinColumn(name ="fk_user", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<User> users = new HashSet<User>();

    public Producto(){}

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
            Precio precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
    }

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
            Precio precio, Set<User> users) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
        this.users = users;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcionCorta() {
        return descripcionCorta;
    }

    public void setDescripcionCorta(String descripcionCorta) {
        this.descripcionCorta = descripcionCorta;
    }

    public String getDescripcionLarga() {
        return descripcionLarga;
    }

    public void setDescripcionLarga(String descripcionLarga) {
        this.descripcionLarga = descripcionLarga;
    }

    public boolean isVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    public Precio getPrecio() {
        return precio;
    }

    public void setPrecio(Precio precio) {
        this.precio = precio;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }


}
