package com.unla.deporteonline.entities;

import java.io.Serializable;

import javax.persistence.*;
@Entity
@Table(name = "valoracion")
public class Valoracion implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    private int fk_user;

    @Id
    private int fk_producto;

    @Column(name = "valoracion")
    private int valoracion;

    @Column(name= "comentario")
    private String comentario;

    //user
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user", referencedColumnName = "id")
    private User user;

    //producto
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_producto", referencedColumnName = "idProducto")
    private Producto producto;

    public Valoracion(){}

    public Valoracion(int fk_user, int fk_producto, int valoracion, String comentario) {
        this.fk_user = fk_user;
        this.fk_producto = fk_producto;
        this.valoracion = valoracion;
        this.comentario = comentario;
    }

    public Valoracion(int fk_user, int fk_producto, int valoracion, String comentario, User user, Producto producto) {
        this.fk_user = fk_user;
        this.fk_producto = fk_producto;
        this.valoracion = valoracion;
        this.comentario = comentario;
        this.user = user;
        this.producto = producto;
    }

    public int getFk_user() {
        return fk_user;
    }

    public void setFk_user(int fk_user) {
        this.fk_user = fk_user;
    }

    public int getFk_producto() {
        return fk_producto;
    }

    public void setFk_producto(int fk_producto) {
        this.fk_producto = fk_producto;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
        this.valoracion = valoracion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }



    

}