package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Atributos;
import com.unla.deporteonline.entities.Producto;
import com.unla.deporteonline.services.IProductService;
import com.unla.deporteonline.repositories.IProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductRestController {

	@Autowired
	@Qualifier("productService")
	private IProductService productService;

//create product
@PostMapping(value ="/createProduct", consumes="application/json")
public Object createProduct(@RequestBody Producto createProduct) {
    createProduct.setVisible(true);
	System.out.println("Product: " + createProduct.toString());
	return productService.saveProduct(createProduct);
}

//update product
@PostMapping(value ="/updateProduct", consumes="application/json")
public Object updateProduct(@RequestBody Producto createProduct) {
    System.out.println("update product: " + createProduct.toString());
    return productService.saveProduct(createProduct);
}


//Delete Product
@PostMapping(value ="/deleteProduct")
	public String deleteProduct(@RequestParam("idProducto") int id) {
        Producto product = productService.findProductById(id);
        product.setVisible(false);
        productService.saveProduct(product);
		return ("usuario eliminado");
	}
//traer producto por id
@GetMapping("/ProductId") //Traes todos los atrbiutos
	public Producto findProductById(@RequestParam("idProducto") int id) {
		return productService.findProductById(id);
	}

/*
@PostMapping(value= "/agregarAtributo/{idProducto}", consumes="application/json")
	public Object agregarAtributo(@PathVariable int id, @RequestBody Atributos atributos){
		return productService.agregarAtributo(id, atributos);
	}
*/

//traer todos los productors
@GetMapping("/allproduct")
	public List<Producto> findAllProduct() {
		return productService.findAllProduct();
	}
//traer todas las promociones
@GetMapping("/allPromotion") 
	public List<Producto> findPromotion() {
		return productService.findPromotion();
	}

}