package com.unla.deporteonline.controllers.api.v1;

import java.util.List;

import com.unla.deporteonline.entities.Producto;
import com.unla.deporteonline.services.IProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductRestController {

	@Autowired
	@Qualifier("productService")
	private IProductService productService;

	// create product
	@PostMapping(value = "/createProduct", consumes = "application/json")
	public Object createProduct(@RequestBody Producto createProduct) {
		createProduct.setVisible(true);
		System.out.println("Product: " + createProduct.toString());
		return productService.saveProduct(createProduct);
	}

	// update product
	@PostMapping(value = "/updateProduct", consumes = "application/json")
	public Object updateProduct(@RequestBody Producto createProduct) {
		createProduct.setVisible(true);
		System.out.println("update product: " + createProduct.toString());
		return productService.saveProduct(createProduct);
	}

	// Delete Product
	@PostMapping(value = "/deleteProduct")
	public String deleteProduct(@RequestParam("idProducto") int id) {
		Producto product = productService.findProductById(id);
		product.setVisible(false);
		productService.saveProduct(product);
		return ("usuario eliminado");
	}

	// traer producto por id
	@GetMapping("/ProductId")
	public Producto findProductById(@RequestParam("idProducto") int id) {
		return productService.findProductById(id);
	}

	// traer todos los productors
	@GetMapping("/allproduct")
	public List<Producto> findAllProduct() {
		return productService.findAllProduct();
	}

	// traer todas las promociones
	@GetMapping("/allPromotion")
	public List<Producto> findPromotion() {
		return productService.findPromotion();
	}

	//traer productos por Subcategoria
	@GetMapping("/productBySubcategory") 
	public List<Producto> findProductBySubcategory(@RequestParam("idSubcategory") int idSubcategory) {
		return productService.findProductBySubcategory(idSubcategory);
	}
	
	//traer productos por Categoria
	@GetMapping("/productByCategory") 
	public List<Producto> findProductBycategory(@RequestParam("idCategory") int idCategory) {
		return productService.findProductByCategory(idCategory);
	}
	//traer productos por nombre
	@GetMapping("/productByName") 
	public List<Producto> productByName(@RequestParam("nombre") String nombre) {
		return productService.findProductByName(nombre);
	}

}