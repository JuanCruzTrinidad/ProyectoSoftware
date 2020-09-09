package com.unla.deporteonline.configuration;

import com.unla.deporteonline.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
    
    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @Autowired public void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests()
            .antMatchers("/css/*", "/imgs/*", "/js/*", "/vendor/bootstrap/css/*", "/vendor/jquery/*", "/vendor/bootstrap/js/*").permitAll()
            .anyRequest().authenticated()
        .and()
            .formLogin().loginPage("/login").loginProcessingUrl("/loginprocess")
            .usernameParameter("username").passwordParameter("password")
            .defaultSuccessUrl("/loginsuccess").permitAll()
        .and()
            .logout().logoutUrl("/logout").logoutSuccessUrl("/logout").permitAll();

    }
}
