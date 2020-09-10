package com.unla.deporteonline.services.implementation;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.unla.deporteonline.entities.UserRole;
import com.unla.deporteonline.repositories.IUserRepository;
import com.unla.deporteonline.services.IUserService;

@Service("userService")
public class UserService implements UserDetailsService, IUserService {

	@Autowired
	@Qualifier("userRepository")
	private IUserRepository userRepository;

	//Test clase user
	public List<com.unla.deporteonline.entities.User> findAll() {
		return userRepository.findAll();
	}
	
	@Override
	//Toma el email
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		com.unla.deporteonline.entities.User user = userRepository.findByEmailAndFetchUserRolesEagerly(email);
		return buildUser(user, buildGrantedAuthorities(user.getUserRoles()));
	}
	
	private User buildUser(com.unla.deporteonline.entities.User user, List<GrantedAuthority> grantedAuthorities) {
        return new User(user.getEmail(), user.getPassword(), user.isEnabled(),
						true, true, true, //accountNonExpired, credentialsNonExpired, accountNonLocked,
						grantedAuthorities);
	}
	
	private List<GrantedAuthority> buildGrantedAuthorities(Set<UserRole> userRoles) {
		Set<GrantedAuthority> grantedAuthorities = new HashSet<GrantedAuthority>();
		for(UserRole userRole: userRoles) {
			grantedAuthorities.add(new SimpleGrantedAuthority(userRole.getRole()));
		}
		return new ArrayList<GrantedAuthority>(grantedAuthorities);
	}
}