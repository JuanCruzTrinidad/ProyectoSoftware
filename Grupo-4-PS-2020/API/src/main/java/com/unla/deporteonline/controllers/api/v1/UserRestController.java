package com.unla.deporteonline.controllers.api.v1;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import java.io.IOException;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import java.util.stream.Collectors;

import com.unla.deporteonline.entities.Role;
import com.unla.deporteonline.entities.User;
import com.unla.deporteonline.services.IRoleService;
import com.unla.deporteonline.services.IUserService;
import com.unla.deporteonline.exception.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST})
public class UserRestController {

	@Autowired
	@Qualifier("userService")
	private IUserService userService;

	@Autowired
	@Qualifier("roleService")
	private IRoleService roleService;


	//cambie esto a post, porque sin desde el js no podemos mandale parametros al backend.
	@PostMapping("/login")
	public List<String> login(@RequestParam("email") String email) {
		List<String> lista = new ArrayList<String>();
		
		User user = userService.findByEmail(email);
		if(user == null) throw new ValidationException("Usuario no valido");
		
		//Pasar como parametro la pw y hacer la comparacion entre hashs en el front. Si da true que se haga el login, si no no.
		lista.add(getJWTToken(user.getEmail()));
		lista.add(user.getPassword());

		return lista;
	}
	

	//Rama spring-security
	// @GetMapping("/login")
    // public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
	// 	User user = userService.findByEmailAndPassword(email, password);
	// 		if(user == null) throw new ValidationException("Usuario no valido");
	// 	user.setIslogged(true);
	// 	userService.saveUser(user);
    //     return getJWTToken(user.getEmail());
	// }
	
////////////////////*******************USER ********************************/////////////////////

	/* Rama spring-security (no se utilizan)

	//modificar usuario
	@PostMapping(value ="/updateUser", consumes="application/json")
    public Object updateUser(@RequestBody User updateUser) {
		System.out.println("User: " + updateUser.toString());
		return userService.saveUser(updateUser);
	}

	//eliminar usuario logicamente
	@PostMapping(value ="/deleteUser")
	public String deleteUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		User user = userService.findByEmailAndPassword(email, password);
			if(user == null) throw new ValidationException("Usuario no valido");
		user.setIslogged(false);
		user.setEnabled(false);
		userService.saveUser(user);
		return ("usuario eliminado");
	}

	//eliminar usuario fisico
	@DeleteMapping(value="/deleteUser")
	public String deleteUserPhysical(@RequestParam("email") String email, @RequestParam("password") String password){
		User user = userService.findByEmailAndPassword(email, password);
			if(user == null) throw new ValidationException("Usuario no valido");
		userService.deleteUser(user);
		return ("usuario eliminado");
	}
	*/
	
	//agregar usuario
	@PostMapping(value ="/newUser", consumes="application/json")
    public Object newUser(@RequestBody User newUser) {
		newUser.setEnabled(true);

		Set<Role> roles = newUser.getRoles();
		roles.add(roleService.findById(1));
		newUser.setRoles(roles); //Le pongo el role de user por default

		System.out.println(newUser.toString());
		return userService.saveUser(newUser);
	}
	
	@PostMapping(value = "/recoverpw", consumes="application/json")
	public ResponseEntity<String> recoveryPassword(@RequestBody String email ) throws IOException {
		
		User user = userService.findByEmail(email);
	    Email from = new Email("juancruztrinidad97@gmail.com");
	    String subject = "Resetea tu contraseña";
	    Email to =  new Email(email);
	    Content content = new Content("text/plain", "Por favor, ingresa a esta url para cambiar tu contraseña: http://localhost:3000/resetpw/:"+user.getId());
	    Mail mail = new Mail(from, subject, to, content);

	    SendGrid sg = new SendGrid("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");
	    Request request = new Request();
	    
	    try {
	      request.setMethod(Method.POST);
	      request.setEndpoint("mail/send");
	      request.setBody(mail.build());
	      Response response = sg.api(request);
	      System.out.println(response.getStatusCode());
	      System.out.println(response.getBody());
	      System.out.println(response.getHeaders());
	    } catch (IOException ex) 
	    {
	      throw ex;
	    }
		return new ResponseEntity<String>(email, HttpStatus.OK);
	}


	@PostMapping(value = "/contactform")
	public ResponseEntity<String> contactForm(@RequestParam("name") String name, @RequestParam("email") String email, @RequestParam("subject") String subject, @RequestParam("message") String message) throws IOException {
		
	    Email from = new Email(email);
	    Email to = new Email("juancruztrinidad97@gmail.com");
	    Content content = new Content("text/plain", message);
	    Mail mail = new Mail(from, subject, to, content);

	    SendGrid sg = new SendGrid("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");
	    Request request = new Request();
	    
	    try {
	      request.setMethod(Method.POST);
	      request.setEndpoint("mail/send");
	      request.setBody(mail.build());
	      Response response = sg.api(request);
	      System.out.println(response.getStatusCode());
	      System.out.println(response.getBody());
	      System.out.println(response.getHeaders());
	    } catch (IOException ex) 
	    {
	      throw ex;
	    }
		return new ResponseEntity<String>("puto", HttpStatus.OK);
	}
	

	@PostMapping(value= "/resetpw")
	public ResponseEntity<String> resetPassword(@RequestBody User u) {
		int id = u.getId();
		String password = u.getPassword();
		
		User user = userService.findById(id);
		
		if(user == null) {
			return new ResponseEntity<String>("bad", HttpStatus.BAD_REQUEST);
		}

		user.setPassword(password);
		userService.saveUser(user);
		
		return new ResponseEntity<String>("hola", HttpStatus.OK);
	}
	

	@GetMapping("/allusers")
	public List<User> findAll() {//throws IOException {
//	    Email from = new Email("juancruztrinidad97@gmail.com");
//	    String subject = "Sending with SendGrid is Fun";
//	    Email to =  new Email("juancruztrinidad97@gmail.com");
//	    Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
//	    Mail mail = new Mail(from, subject, to, content);
//
//	    SendGrid sg = new SendGrid("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");
//	    Request request = new Request();
//	    try {
//	      request.setMethod(Method.POST);
//	      request.setEndpoint("mail/send");
//	      request.setBody(mail.build());
//	      Response response = sg.api(request);
//	      System.out.println(response.getStatusCode());
//	      System.out.println(response.getBody());
//	      System.out.println(response.getHeaders());
//	    } catch (IOException ex) {
//	      throw ex;
//	    }
		return userService.findAll();
	}
	
    private String getJWTToken(String username) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");
		
		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes()).compact();

		return "Bearer " + token;
	}

	@GetMapping("/allusers")
	public List<User> findByIsEnabled() {
		return userService.findByIsEnabled();
	}
}