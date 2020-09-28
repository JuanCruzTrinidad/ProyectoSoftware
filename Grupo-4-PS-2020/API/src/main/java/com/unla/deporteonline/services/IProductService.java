package com.unla.deporteonline.services;

import com.unla.deporteonline.entities.Producto;
import java.util.List;
import java.util.Optional;


public interface IProductService {
    public List<Producto> findAll();
    
    public Object saveProduct(Producto producto);

    public Producto findProductById(final int id);
   
}