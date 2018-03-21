package it.disim.univaq.alexanderperucci.services.reds.business.impl.jpa;

import it.disim.univaq.alexanderperucci.services.reds.business.BusinessException;
import it.disim.univaq.alexanderperucci.services.reds.business.UserService;
import it.disim.univaq.alexanderperucci.services.reds.business.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;



import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl extends CRUDServiceImpl<Long, User> implements
		UserService {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional()
	public User authenticate(String username) throws BusinessException {
		return (User) em.createQuery("from User where username = :username").setParameter("username", username).getSingleResult();
	}
	
}
