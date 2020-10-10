package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table (name="payment")
public class Payment {
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idPayment;

    @Column (name= "name", nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY,mappedBy = "payment")
    private Set<Pedido> paymentPedido = new HashSet<Pedido>();

    public Payment() {
    }

    public Payment(int idPayment, String name) {
        this.idPayment = idPayment;
        this.name = name;
    }

    public Payment(int idPayment, String name, Set<Pedido> paymentPedido) {
        this.idPayment = idPayment;
        this.name = name;
        this.paymentPedido = paymentPedido;
    }

    public int getIdPayment() {
        return idPayment;
    }

    public void setIdPayment(int idPayment) {
        this.idPayment = idPayment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Pedido> getPaymentPedido() {
        return paymentPedido;
    }

    public void setPaymentPedido(Set<Pedido> paymentPedido) {
        this.paymentPedido = paymentPedido;
    }

    @Override
    public String toString() {
        return "Payment [idPayment=" + idPayment + ", name=" + name + ", paymentPedido=" + paymentPedido + "]";
    }

    
    

}
