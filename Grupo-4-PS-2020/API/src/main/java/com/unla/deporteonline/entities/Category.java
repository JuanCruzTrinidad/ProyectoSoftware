package com.unla.deporteonline.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table (name="category")
public class Category  {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int idCategory;

    @Column (name= "name", nullable = false)
    private String name;

    @Column (name= "nameGoogle")
    private String nameGoogle;

    @OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY,mappedBy = "category")
    private Set<Subcategory> subcategorys = new HashSet<Subcategory>();

    public Category() {}

    public Category(int idCategory, String name, String nameGoogle) {
        this.idCategory = idCategory;
        this.name = name;
        this.nameGoogle = nameGoogle;
    }

    public Category(int idCategory, String name, String nameGoogle, Set<Subcategory> subcategorys) {
        this.idCategory = idCategory;
        this.name = name;
        this.nameGoogle = nameGoogle;
        this.subcategorys = subcategorys;
    }

    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
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

    //@JsonManagedReference (value = "subcat")
    public Set<Subcategory> getSubcategorys() {
        return subcategorys;
    }

    public void setSubcategorys(Set<Subcategory> subcategorys) {
        this.subcategorys = subcategorys;
    }

    @Override
    public String toString() {
        return "Category [idCategory=" + idCategory + ", name=" + name + ", nameGoogle=" + nameGoogle
                + ", subcategorys=" + subcategorys + "]";
    }

    
}
