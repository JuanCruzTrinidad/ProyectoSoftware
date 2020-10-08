package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table (name="direction")
public class Direction {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idDirection;

    @Column (name= "street", nullable = false)
    private String street;

    @Column (name= "number", nullable = false)
    private int number;

    @Column (name= "flat")
    private int flat;

    @Column (name= "apartment")
    private int apartment;

    @Column (name= "postalCode", nullable = false)
    private int postalCode;

    @Column (name= "location", nullable = false)
    private String location;

    @Column (name= "province", nullable = false)
    private String province;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "direction")
    private Set<Pedido> directionPedido = new HashSet<Pedido>();

    public Direction() {
    }

    public Direction(int idDirection, String street, int number, int flat, int apartment, int postalCode,
            String location, String province) {
        this.idDirection = idDirection;
        this.street = street;
        this.number = number;
        this.flat = flat;
        this.apartment = apartment;
        this.postalCode = postalCode;
        this.location = location;
        this.province = province;
    }

    public Direction(int idDirection, String street, int number, int flat, int apartment, int postalCode,
            String location, String province, Set<Pedido> directionPedido) {
        this.idDirection = idDirection;
        this.street = street;
        this.number = number;
        this.flat = flat;
        this.apartment = apartment;
        this.postalCode = postalCode;
        this.location = location;
        this.province = province;
        this.directionPedido = directionPedido;
    }

    public int getIdDirection() {
        return idDirection;
    }

    public void setIdDirection(int idDirection) {
        this.idDirection = idDirection;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getFlat() {
        return flat;
    }

    public void setFlat(int flat) {
        this.flat = flat;
    }

    public int getApartment() {
        return apartment;
    }

    public void setApartment(int apartment) {
        this.apartment = apartment;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public Set<Pedido> getDirectionPedido() {
        return directionPedido;
    }

    public void setDirectionPedido(Set<Pedido> directionPedido) {
        this.directionPedido = directionPedido;
    }

    @Override
    public String toString() {
        return "Direction [apartment=" + apartment + ", directionPedido=" + directionPedido + ", flat=" + flat
                + ", idDirection=" + idDirection + ", location=" + location + ", number=" + number + ", postalCode="
                + postalCode + ", province=" + province + ", street=" + street + "]";
    }

    
    
}
