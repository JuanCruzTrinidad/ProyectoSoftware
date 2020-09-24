package com.unla.deporteonline.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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



    // @OneToMany(fetch = FetchType.LAZY)
    //@JoinColumn(name = "idMedidaEmbalaje") //si lo saco genera una intermedia

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "atributos")
    private Set<MedidaEmbalaje> medidasEmbalaje= new HashSet<MedidaEmbalaje>();
    
//@JoinTable(name = "medidaEmbalaje") @JoinColumn(name = "idAtributos")
    public Atributos(){}

    public Atributos(int sku, float talle, String color, Set<MedidaEmbalaje> medidasEmbalaje) {
        this.sku = sku;
        this.talle = talle;
        this.color = color;
        this.medidasEmbalaje = medidasEmbalaje;
    }

    public Atributos(int sku, float talle, String color) {
        this.sku = sku;
        this.talle = talle;
        this.color = color;
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

    public Set<MedidaEmbalaje> getMedidasEmbalaje() {
        return medidasEmbalaje;
    }

    public void setMedidasEmbalaje(Set<MedidaEmbalaje> medidasEmbalaje) {
        this.medidasEmbalaje = medidasEmbalaje;
    }

    
}
