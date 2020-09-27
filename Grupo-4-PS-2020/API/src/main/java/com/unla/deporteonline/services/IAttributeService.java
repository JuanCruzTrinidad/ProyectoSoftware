package com.unla.deporteonline.services;
import  com.unla.deporteonline.entities.Atributos;
import java.util.List;


public interface IAttributeService {
    public List<Atributos> findAll();
    
    public Object saveAttribute(Atributos attribute);
   
    public void deleteAttribute(Integer attributeId);
}
