package it.disim.univaq.alexanderperucci.services.reds.common.spring.security;

import it.disim.univaq.alexanderperucci.services.reds.business.BusinessException;
import it.disim.univaq.alexanderperucci.services.reds.business.UserService;
import it.disim.univaq.alexanderperucci.services.reds.business.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserService service;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user;
		try {
			user = service.authenticate(username);
		} catch (BusinessException e) {
			throw new UsernameNotFoundException("utente non trovato");
		}

		if (user==null) {
			throw new UsernameNotFoundException("utente non trovato");
		}
		return new UserDetailsImpl(user);

	}

}