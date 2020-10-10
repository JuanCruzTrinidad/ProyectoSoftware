package com.unla.deporteonline.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="pedido")
public class Pedido {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idPedido;

    @Column (name= "coment")
    private String coment;

    @Column (name= "shippingCost")
    private float shippingCost;

    @Column (name= "total")
    private float total;

    @Column (name= "descuento")
    private float descuento;

    @Column(name= "subtotal")
    private float subtotal;

    @ManyToOne
    @JoinColumn (name= "idUser", nullable = false)
    @JsonIgnoreProperties ( {"userPedido","roles","valoraciones"})
    private User user;

    @ManyToOne (optional = true)
    @JoinColumn (name= "idDiscount", nullable = true)
    @JsonIgnoreProperties ( "discountPedido" )
    private Discount discount;

    @ManyToOne (optional = true)
    @JoinColumn (name= "idDirection", nullable = true)
    @JsonIgnoreProperties ( "directionPedido" )
    private Direction direction;

    @ManyToOne (optional = true)
    @JoinColumn (name= "idPayment", nullable = true)
    @JsonIgnoreProperties ( "paymentPedido" )
    private Payment payment;

    public Pedido(){}

    public Pedido(int idPedido, String coment, float shippingCost, float total, float descuento, float subtotal,
            User user) {
        this.idPedido = idPedido;
        this.coment = coment;
        this.shippingCost = shippingCost;
        this.total = total;
        this.descuento = descuento;
        this.subtotal = subtotal;
        this.user = user;
    }

    public Pedido(int idPedido, String coment, float shippingCost, float total, float descuento, float subtotal,
            User user, Discount discount, Direction direction, Payment payment) {
        this.idPedido = idPedido;
        this.coment = coment;
        this.shippingCost = shippingCost;
        this.total = total;
        this.descuento = descuento;
        this.subtotal = subtotal;
        this.user = user;
        this.discount = discount;
        this.direction = direction;
        this.payment = payment;
    }

    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public String getComent() {
        return coment;
    }

    public void setComent(String coment) {
        this.coment = coment;
    }

    public float getShippingCost() {
        return shippingCost;
    }

    public void setShippingCost(float shippingCost) {
        this.shippingCost = shippingCost;
    }

    public float getTotal() {
        return total;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    public float getDescuento() {
        return descuento;
    }

    public void setDescuento(float descuento) {
        this.descuento = descuento;
    }

    public float getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(float subtotal) {
        this.subtotal = subtotal;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Discount getDiscount() {
        return discount;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    @Override
    public String toString() {
        return "Pedido [coment=" + coment + ", descuento=" + descuento + ", direction=" + direction + ", discount="
                + discount + ", idPedido=" + idPedido + ", payment=" + payment + ", shippingCost=" + shippingCost
                + ", subtotal=" + subtotal + ", total=" + total + ", user=" + user + "]";
    }

    

    
}