package it.disim.univaq.alexanderperucci.services.reds.business;

import it.disim.univaq.alexanderperucci.services.reds.business.model.User;

public interface UserService extends CRUDService<Long, User>{

	User authenticate(String username) throws BusinessException;
	
}
