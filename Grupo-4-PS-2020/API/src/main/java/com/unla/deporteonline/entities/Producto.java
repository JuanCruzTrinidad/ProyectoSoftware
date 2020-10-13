package com.unla.deporteonline.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @Column(name = "imagen")
    private String imagen;

    @Column(name = "video")
    private String video;

    //valoracion
    @OneToMany(mappedBy = "producto")
    private Set<Valoracion> valoraciones = new HashSet<Valoracion>();

    //atributos
    @OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY,mappedBy = "producto")
    private Set<Atributos> atributos= new HashSet<Atributos>();

    //subcategoria
    @ManyToOne //(optional = false, cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties ( "productos" )
    @JoinColumn (name= "idSubcategory")
    private Subcategory subcategory;


    public Producto(){}

    public Producto(int idProducto, String nombre, String descripcionCorta, String descripcionLarga, boolean visible,
        float precio, float precioOferta, String imagen, String video, Set<Valoracion> valoraciones,
        Set<Atributos> atributos, Subcategory subcategory) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.visible = visible;
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.imagen = imagen;
        this.video = video;
        this.valoraciones = valoraciones;
        this.atributos = atributos;
        this.subcategory = subcategory;
    }

	/*
	 * public Producto(int idProducto, String nombre, String descripcionCorta,
	 * String descripcionLarga, boolean visible, float precio, float precioOferta,
	 * String imagen, String video) { this.idProducto = idProducto; this.nombre =
	 * nombre; this.descripcionCorta = descripcionCorta; this.descripcionLarga =
	 * descripcionLarga; this.visible = visible; this.precio = precio;
	 * this.precioOferta = precioOferta; this.imagen = imagen; this.video = video; }
	 */


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

    @JsonManagedReference (value = "prodValue")
    public Set<Valoracion> getValoraciones() {
        return valoraciones;
    }

    public void setValoraciones(Set<Valoracion> valoraciones) {
        this.valoraciones = valoraciones;
    }

    @JsonManagedReference (value = "prodAtributo")
    public Set<Atributos> getAtributos() {
        return atributos;
    }

    public void setAtributos(Set<Atributos> atributos) {
        this.atributos = atributos;
    }

    //@JsonBackReference (value = "prodsub")
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


    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }
    
    

    
    
}
