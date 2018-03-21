package it.disim.univaq.alexanderperucci.services.reds.common.spring.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import it.disim.univaq.alexanderperucci.services.reds.business.model.User;


public class AuthenticationHolder {

    public User getUser() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            if (authentication.getPrincipal() instanceof UserDetailsImpl) {
                UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authentication.getPrincipal();
                return userDetailsImpl.getUser();
            }
        }

        return new User();
    }
}
