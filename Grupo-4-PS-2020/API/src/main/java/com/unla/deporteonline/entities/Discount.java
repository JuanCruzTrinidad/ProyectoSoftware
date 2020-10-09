package com.unla.deporteonline.entities;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table (name="discount")
public class Discount {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idDiscount;

    @Column (name= "code", nullable = false)
    private String code;
    
    @Column (name= "percentage", nullable = false)
    private float percentage;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "discount")
    private Set<Pedido> discountPedido = new HashSet<Pedido>();

    public Discount() {
    }

    public Discount(int idDiscount, String code, float percentage) {
        this.idDiscount = idDiscount;
        this.code = code;
        this.percentage = percentage;
    }

    public Discount(int idDiscount, String code, float percentage, Set<Pedido> discountPedido) {
        this.idDiscount = idDiscount;
        this.code = code;
        this.percentage = percentage;
        this.discountPedido = discountPedido;
    }

    public int getIdDiscount() {
        return idDiscount;
    }

    public void setIdDiscount(int idDiscount) {
        this.idDiscount = idDiscount;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public float getPercentage() {
        return percentage;
    }

    public void setPercentage(float percentage) {
        this.percentage = percentage;
    }

    public Set<Pedido> getDiscountPedido() {
        return discountPedido;
    }

    public void setDiscountPedido(Set<Pedido> discountPedido) {
        this.discountPedido = discountPedido;
    }

    @Override
    public String toString() {
        return "Discount [code=" + code + ", discountPedido=" + discountPedido + ", idDiscount=" + idDiscount
                + ", percentage=" + percentage + "]";
    }
    
    
}
