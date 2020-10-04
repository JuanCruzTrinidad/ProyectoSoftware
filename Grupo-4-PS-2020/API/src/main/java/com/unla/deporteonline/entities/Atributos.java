package com.unla.deporteonline.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="atributos")
public class Atributos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sku;

    @Column(name = "talle",nullable = false)
    private float talle;

    @Column (name = "color", nullable = false)
    private String color;

    @Column(name = "peso", nullable = false)
    private float peso;

    @Column(name ="ancho", nullable = false)
    private float ancho;

    @Column(name ="alto", nullable = false)
    private float alto;

    @Column(name ="profundidad", nullable = false)
    private float profundidad;


    //producto
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn (name= "idProducto")
    private Producto producto;


    public Atributos(){}

    public Atributos(int sku, float talle, String color, float peso, float ancho, float alto, float profundidad) {
        this.sku = sku;
        this.talle = talle;
        this.color = color;
        this.peso = peso;
        this.ancho = ancho;
        this.alto = alto;
        this.profundidad = profundidad;
    }

    public Atributos(int sku, float talle, String color, float peso, float ancho, float alto, float profundidad,
            Producto producto) {
        this.sku = sku;
        this.talle = talle;
        this.color = color;
        this.peso = peso;
        this.ancho = ancho;
        this.alto = alto;
        this.profundidad = profundidad;
        this.producto = producto;
    }

    public int getSku() {
        return sku;
    }

    public void setSku(int sku) {
        this.sku = sku;
    }

    public float getTalle() {
        return talle;
    }

    public void setTalle(float talle) {
        this.talle = talle;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public float getAncho() {
        return ancho;
    }

    public void setAncho(float ancho) {
        this.ancho = ancho;
    }

    public float getAlto() {
        return alto;
    }

    public void setAlto(float alto) {
        this.alto = alto;
    }

    public float getProfundidad() {
        return profundidad;
    }

    public void setProfundidad(float profundidad) {
        this.profundidad = profundidad;
    }

    @JsonBackReference (value = "prodAtributo")
    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "Atributos [alto=" + alto + ", ancho=" + ancho + ", color=" + color + ", peso=" + peso + ", producto="
                + producto + ", profundidad=" + profundidad + ", sku=" + sku + ", talle=" + talle + "]";
    }

    
    

    
}
