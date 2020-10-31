package com.unla.deporteonline.entities;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name= "detalle_pedido")
@IdClass(DetallePedidoId.class)
public class DetallePedido implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    private int fk_pedido;

    @Id
    private int fk_atributos;

    @Column(name = "cantidad")
    private int cantidad;

    //pedido
    @ManyToOne
    @JoinColumn(name = "fk_pedido", referencedColumnName = "idPedido", insertable = false, updatable = false )
    private Pedido pedido;

    //atributos
    @ManyToOne
    @JoinColumn(name = "fk_atributos", referencedColumnName = "sku", insertable = false, updatable = false)
    private Atributos atributos;

    public DetallePedido(){}

    public DetallePedido(int fk_pedido, int fk_atributos, int cantidad) {
        this.fk_pedido = fk_pedido;
        this.fk_atributos = fk_atributos;
        this.cantidad = cantidad;
    }

    // public DetallePedido(int fk_pedido, int fk_atributos, int cantidad, Pedido pedido, Atributos atributos) {
    //     this.fk_pedido = fk_pedido;
    //     this.fk_atributos = fk_atributos;
    //     this.cantidad = cantidad;
    //     this.pedido = pedido;
    //     this.atributos = atributos;
    // }


    public int getFk_pedido() {
        return fk_pedido;
    }

    public void setFk_pedido(int fk_pedido) {
        this.fk_pedido = fk_pedido;
    }

    public int getFk_atributos() {
        return fk_atributos;
    }

    public void setFk_atributos(int fk_atributos) {
        this.fk_atributos = fk_atributos;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @JsonBackReference (value = "pedidoDetalle")
    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    @JsonBackReference (value = "atributosDetalle")
    public Atributos getAtributos() {
        return atributos;
    }

    public void setAtributos(Atributos atributos) {
        this.atributos = atributos;
    }

    @Override
    public String toString() {
        return "[ID Pedido: " + fk_pedido + ", ID Atributo: " + fk_atributos + ", cantidad: " + cantidad + "]";
    }

    
    
}
