package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Category;
import java.util.List;


public interface ICategoryService {

    public List<Category> findAll();
    /*public List<Atributos> findAll();
    
    public Object saveAttribute(Atributos attribute);
   
    public void deleteAttribute(Integer attributeId);*/
}