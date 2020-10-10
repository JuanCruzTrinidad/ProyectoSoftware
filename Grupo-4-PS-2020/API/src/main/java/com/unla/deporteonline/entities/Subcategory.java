package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table (name="subcategory")
public class Subcategory {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idSubcategory;

    @Column (name= "name", nullable = false)
    private String name;

    @Column (name= "nameGoogle")
    private String nameGoogle;

    @ManyToOne //(optional = false, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn (name= "idCategory")
    @JsonIgnoreProperties ( "subcategorys" )
    private Category category;

    @OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY,mappedBy = "subcategory")
    private Set<Producto> productos = new HashSet<Producto>();

    public Subcategory() {
    }

    public Subcategory(int idSubcategory, String name, String nameGoogle) {
        this.idSubcategory = idSubcategory;
        this.name = name;
        this.nameGoogle = nameGoogle;
    }

    public Subcategory(int idSubcategory, String name, String nameGoogle, Category category, Set<Producto> productos) {
        this.idSubcategory = idSubcategory;
        this.name = name;
        this.nameGoogle = nameGoogle;
        this.category = category;
        this.productos = productos;
    }

    public int getIdSubcategory() {
        return idSubcategory;
    }

    public void setIdSubcategory(int idSubcategory) {
        this.idSubcategory = idSubcategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNameGoogle() {
        return nameGoogle;
    }

    public void setNameGoogle(String nameGoogle) {
        this.nameGoogle = nameGoogle;
    }

    //@JsonBackReference (value = "subcat")
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    //@JsonManagedReference (value = "prodsub")
    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

	@Override
	public String toString() {
		return "Subcategory [category=" + category + ", idSubcategory=" + idSubcategory + ", name=" + name
				+ ", nameGoogle=" + nameGoogle + ", productos=" + productos + "]";
	}

    
    
}
