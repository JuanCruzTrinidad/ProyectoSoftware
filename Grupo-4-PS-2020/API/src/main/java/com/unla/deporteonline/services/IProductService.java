package com.unla.deporteonline.services;

import com.unla.deporteonline.entities.Producto;
import java.util.List;


public interface IProductService {
    public List<Producto> findAllProduct();
    
    public Object saveProduct(Producto producto);

    public Producto findProductById(final int id);

    public List<Producto> findPromotion();

    public List<Producto> findProductBySubcategory(final int idSubcategory);

    public List<Producto> findProductByCategory(final int idCategory);
    //public Object agregarAtributo(int idProducto, final Atributos atributos);
   
}