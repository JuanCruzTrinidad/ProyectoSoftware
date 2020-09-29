package com.unla.deporteonline.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;


public class ValoracionId implements Serializable{
    private static final long serialVersionUID = 1L;

    @Column(name = "fk_user")
    private int fk_user;

    @Column(name = "fk_producto")
    private int fk_producto;

    public ValoracionId(){}

    public ValoracionId(int fk_user, int fk_producto) {
        this.fk_user = fk_user;
        this.fk_producto = fk_producto;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
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

    @Override   
    public int hashCode() {
        return Objects.hash(fk_user, fk_producto);
    }
    
}
