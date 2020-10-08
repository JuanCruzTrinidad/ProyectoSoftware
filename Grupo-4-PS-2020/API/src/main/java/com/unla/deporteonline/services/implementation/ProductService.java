package com.unla.deporteonline.services.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.unla.deporteonline.entities.Atributos;
import com.unla.deporteonline.entities.Producto;
import com.unla.deporteonline.services.IProductService;
import com.unla.deporteonline.repositories.IProductRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service("productService")
public class ProductService implements IProductService {

	@Autowired
	@Qualifier("ProductRepository")
	private IProductRepository iproductRepository;

	public Object saveProduct(final Producto producto) {
		return iproductRepository.saveAndFlush(producto);
	}

	public List<Producto> findAllProduct() {
		return iproductRepository.findAllProduct();
	}

	public Producto findProductById(final int id) {
		return iproductRepository.findById(id).get();
	}

	public List<Producto> findPromotion(){
		return iproductRepository.findPromotion();
	}

	public List<Producto> findProductBySubcategory(final int idSubcategory){
		return iproductRepository.findProductBySubcategory(idSubcategory);
	}

	public List<Producto> findProductByCategory(final int idCategory){
		return iproductRepository.findProductByCategory(idCategory);
	}
	/*
	public Object agregarAtributo(int idProducto, final Atributos atributos){
		Producto aux=null;
		Producto producto = iproductRepository.findById(idProducto).get();
		if(producto!=null){
			producto.getAtributos().add(atributos);
			aux=iproductRepository.saveAndFlush(producto);
		}
		return aux;
	}
	*/
}
