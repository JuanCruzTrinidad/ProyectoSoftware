package com.unla.deporteonline.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    @Column(name = "precio",nullable = false)
    private float precio;

    @Column(name="precio_oferta")
    private float precioOferta;

    //valoracion
    @OneToMany(mappedBy = "producto")
    private Set<Valoracion> valoraciones = new HashSet<Valoracion>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "producto")
    @JsonManagedReference
    private Set<Atributos> atributos= new HashSet<Atributos>();

    @ManyToOne (optional = false, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn (name= "idSubcategory")
    @JsonBackReference
    private Subcategory subcategory;


    public Producto(){}

    

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
            float precio, float precioOferta) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
        this.precioOferta = precioOferta;
    }

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
            float precio, float precioOferta, Set<Valoracion> valoraciones, Set<Atributos> atributos) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.valoraciones = valoraciones;
        this.atributos = atributos;
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

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public float getPrecioOferta() {
        return precioOferta;
    }

    public void setPrecioOferta(float precioOferta) {
        this.precioOferta = precioOferta;
    }

    public Set<Valoracion> getValoraciones() {
        return valoraciones;
    }

    public void setValoraciones(Set<Valoracion> valoraciones) {
        this.valoraciones = valoraciones;
    }

    public Set<Atributos> getAtributos() {
        return atributos;
    }

    public void setAtributos(Set<Atributos> atributos) {
        this.atributos = atributos;
    }

   

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
            float precio, float precioOferta, Set<Valoracion> valoraciones, Set<Atributos> atributos,
            Subcategory subcategory) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.valoraciones = valoraciones;
        this.atributos = atributos;
        this.subcategory = subcategory;
    }

    public Subcategory getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(Subcategory subcategory) {
        this.subcategory = subcategory;
    }

    @Override
    public String toString() {
        return "Producto [atributos=" + atributos + ", descripcionCorta=" + descripcionCorta + ", descripcionLarga="
                + descripcionLarga + ", idProducto=" + idProducto + ", nombre=" + nombre + ", precio=" + precio
                + ", precioOferta=" + precioOferta + ", subcategory=" + subcategory + ", valoraciones=" + valoraciones
                + ", visible=" + visible + "]";
    }
    

    
    
}
