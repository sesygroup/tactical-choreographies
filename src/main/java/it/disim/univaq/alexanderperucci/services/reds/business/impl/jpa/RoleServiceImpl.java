package it.disim.univaq.alexanderperucci.services.reds.business.impl.jpa;

import it.disim.univaq.alexanderperucci.services.reds.business.BusinessException;
import it.disim.univaq.alexanderperucci.services.reds.business.RoleService;
import it.disim.univaq.alexanderperucci.services.reds.business.model.Role;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl extends CRUDServiceImpl<Long, Role> implements RoleService {

	@Transactional
	@Override
	public List<Role> findAll() throws BusinessException {
		Query query = em.createQuery("from Role r where r.id != 1");
		return query.getResultList();
	}
}
