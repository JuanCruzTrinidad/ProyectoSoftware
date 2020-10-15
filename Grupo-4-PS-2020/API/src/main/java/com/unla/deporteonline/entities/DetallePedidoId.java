package com.unla.deporteonline.entities;
import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;


public class DetallePedidoId implements Serializable{
    private static final long serialVersionUID = 1L;

    @Column(name = "fk_pedido")
    private int fk_pedido;

    @Column(name = "fk_atributos")
    private int fk_atributos;

    public DetallePedidoId(){}

    public DetallePedidoId(int fk_pedido, int fk_atributos) {
        this.fk_pedido = fk_pedido;
        this.fk_atributos = fk_atributos;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

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

    @Override   
    public int hashCode() {
        return Objects.hash(fk_pedido, fk_atributos);
    }

}