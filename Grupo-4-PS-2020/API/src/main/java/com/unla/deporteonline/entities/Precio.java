package com.unla.deporteonline.entities;
import javax.persistence.*;

@Entity
@Table(name = "precio")
public class Precio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPrecio;

    @Column(name = "monto",nullable = false)
    private float monto;

    @Column(name="moneda",nullable = false)
    private String moneda;

    @Column(name = "montoOferta",nullable = true)
    private float montoOferta;

    @OneToOne(mappedBy = "precio",cascade = CascadeType.ALL, optional = false, fetch = FetchType.LAZY)
    private Producto producto;
    
    public Precio(){}

    public Precio(int idPrecio, float monto, String moneda, float montoOferta, Producto producto) {
        this.idPrecio = idPrecio;
        this.monto = monto;
        this.moneda = moneda;
        this.montoOferta = montoOferta;
        this.producto = producto;
    }

    public int getIdPrecio() {
        return idPrecio;
    }

    public void setIdPrecio(int idPrecio) {
        this.idPrecio = idPrecio;
    }

    public float getMonto() {
        return monto;
    }

    public void setMonto(float monto) {
        this.monto = monto;
    }

    public String getMoneda() {
        return moneda;
    }

    public void setMoneda(String moneda) {
        this.moneda = moneda;
    }

    public float getMontoOferta() {
        return montoOferta;
    }

    public void setMontoOferta(float montoOferta) {
        this.montoOferta = montoOferta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    
}
