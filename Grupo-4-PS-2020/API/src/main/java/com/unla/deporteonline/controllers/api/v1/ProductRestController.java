package com.unla.deporteonline.controllers.api.v1;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.unla.deporteonline.entities.Producto;
import com.unla.deporteonline.services.IProductService;
import com.unla.deporteonline.services.ISubcategoryService;

import io.micrometer.core.ipc.http.HttpSender.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.security.web.header.Header;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductRestController {

	@Autowired
	@Qualifier("productService")
	private IProductService productService;

	@Autowired
	@Qualifier("subcategoryService")
	private ISubcategoryService subcategoryService;

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
	public String deleteProduct(@RequestParam("id") Integer id) {
		Producto product = productService.findProductById(id);
		product.setVisible(false);
		productService.saveProduct(product);
		return ("producto eliminado");
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
	@GetMapping(path = "/productBySubcategory", produces=MediaType.APPLICATION_JSON_VALUE)
	//@RequestMapping(value = "/productBySubcategory", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET ) 
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

	@RequestMapping(value = "/import-excel", method = RequestMethod.POST, headers = "Content-Type= multipart/form-data")
    public List<Producto> importExcelFile(@RequestParam("file") MultipartFile files)throws IOException {
        List<Producto> productList = new ArrayList<>();

        XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream());
		XSSFSheet worksheet = workbook.getSheetAt(0);
		DataFormatter formatter = new DataFormatter();

        for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
            if (index > 0) {
                Producto producto = new Producto();
				XSSFRow row = worksheet.getRow(index);
				producto.setNombre(formatter.formatCellValue(row.getCell(0)));
				producto.setDescripcionCorta(formatter.formatCellValue(row.getCell(1)));
				producto.setDescripcionLarga(formatter.formatCellValue(row.getCell(2)));
				producto.setPrecio(Float.valueOf(formatter.formatCellValue(row.getCell(3))));
				producto.setPrecioOferta(Float.valueOf(formatter.formatCellValue(row.getCell(4))));
				producto.setImagen(formatter.formatCellValue(row.getCell(5)));
				producto.setVideo(formatter.formatCellValue(row.getCell(6)));
				producto.setSubcategory(subcategoryService.findSubcategoryByName(formatter.formatCellValue(row.getCell(7))));
				producto.setVisible(true);
				producto.setMoneda(formatter.formatCellValue(row.getCell(8)));
				productService.saveProduct(producto);
                productList.add(producto);
            }
        }
		workbook.close();
        return productList;
    }
	
}