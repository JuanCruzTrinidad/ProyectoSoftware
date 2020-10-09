package com.unla.deporteonline.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="pedido")
public class Pedido {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idPedido;

    @Column (name= "coment", nullable = false)
    private String coment;

    @Column (name= "shippingCost", nullable = false)
    private float shippingCost;

    @Column (name= "total", nullable = false)
    private float total;

    @Column (name= "descuento", nullable = false)
    private float descuento;

    @ManyToOne 
    @JoinColumn (name= "idUser")
    @JsonIgnoreProperties ( "userPedido" )
    private User user;

    @ManyToOne 
    @JoinColumn (name= "idDiscount")
    @JsonIgnoreProperties ( "discountPedido" )
    private Discount discount;

    @ManyToOne 
    @JoinColumn (name= "idDirection")
    @JsonIgnoreProperties ( "directionPedido" )
    private Direction direction;

    @ManyToOne 
    @JoinColumn (name= "idPayment")
    @JsonIgnoreProperties ( "paymentPedido" )
    private Payment payment;

}