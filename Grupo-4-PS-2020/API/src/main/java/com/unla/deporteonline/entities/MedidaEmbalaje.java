package com.unla.deporteonline.entities;
import javax.persistence.*;

@Entity
@Table(name="medidaembalaje")
public class MedidaEmbalaje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMedidaEmbalaje;

    @Column(name = "tipo", nullable = false)
    private String tipo;

    @Column(name="unidad", nullable = false)
    private String unidad;

    @Column(name = "valor", nullable = false)
    private float valor;


    //bien
    @ManyToOne(optional = false ,cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    @JoinColumn(name = "sku")
    private Atributos atributos;
    

    public MedidaEmbalaje(){}

    public MedidaEmbalaje(int idMedidaEmbalaje, String tipo, String unidad, float valor, Atributos atributos) {
        this.idMedidaEmbalaje = idMedidaEmbalaje;
        this.tipo = tipo;
        this.unidad = unidad;
        this.valor = valor;
        this.atributos = atributos;
    }

    public MedidaEmbalaje(int idMedidaEmbalaje, String tipo, String unidad, float valor) {
        this.idMedidaEmbalaje = idMedidaEmbalaje;
        this.tipo = tipo;
        this.unidad = unidad;
        this.valor = valor;
    }

    public int getIdMedidaEmbalaje() {
        return idMedidaEmbalaje;
    }

    public void setIdMedidaEmbalaje(int idMedidaEmbalaje) {
        this.idMedidaEmbalaje = idMedidaEmbalaje;
    }

    public String getUnidad() {
        return unidad;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public Atributos getAtributos() {
        return atributos;
    }

    public void setAtributos(Atributos atributos) {
        this.atributos = atributos;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

   

    
    
    
    
}