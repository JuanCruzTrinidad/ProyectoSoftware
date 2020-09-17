package com.unla.deporteonline.controllers.api.v1;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import java.io.IOException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.unla.deporteonline.entities.User;
import com.unla.deporteonline.services.IUserService;

import com.unla.deporteonline.exception.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {

	@Autowired
	@Qualifier("userService")
	private IUserService userService;

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
	
	
	@PostMapping(value ="/newUser", consumes="application/json")
    public Object newUser(@RequestBody User newUser) {

		newUser.setEnabled(true);
		System.out.println("User: " + newUser.toString());
		return userService.saveUser(newUser);
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

}