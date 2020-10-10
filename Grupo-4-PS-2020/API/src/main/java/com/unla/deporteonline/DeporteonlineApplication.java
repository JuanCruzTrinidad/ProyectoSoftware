package com.unla.deporteonline;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.unla.deporteonline.configuration.SecurityConfiguration;

@SpringBootApplication
public class DeporteonlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeporteonlineApplication.class, args);
	}

	@EnableWebSecurity
	@Configuration
	class WebSecurityConfig extends WebSecurityConfigurerAdapter {

		@Override
		protected void configure(HttpSecurity http) throws Exception {

			http.csrf().disable()
				.addFilterAfter(new SecurityConfiguration(), UsernamePasswordAuthenticationFilter.class)
				.authorizeRequests()
				.antMatchers(HttpMethod.POST, "/user/login", "/user/newUser", "/user/recoverpw", "/user/resetpw", "/user/contactform").permitAll()
				.antMatchers(HttpMethod.GET, "/user/login", "/product/allproduct", "/category/allcategories", "/product/productByCategory", "/product/productBySubcategory", "/product/ProductId", "/subcategory/subcategoryByCategory/**", "/product/productByName").permitAll()
				.anyRequest().authenticated();
			http.cors();
		}
	}

}
