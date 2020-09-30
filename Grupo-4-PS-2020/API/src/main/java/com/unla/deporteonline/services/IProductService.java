package com.unla.deporteonline.services;

import com.unla.deporteonline.entities.Producto;
import com.unla.deporteonline.entities.Atributos;
import java.util.List;
import java.util.Optional;


public interface IProductService {
    public List<Producto> findAllProduct();
    
    public Object saveProduct(Producto producto);

    public Producto findProductById(final int id);

    public List<Producto> findPromotion();

    //public Object agregarAtributo(int idProducto, final Atributos atributos);
   
}