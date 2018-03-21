package it.disim.univaq.alexanderperucci.services.reds.business;

import java.util.List;

public interface CRUDService<PK extends java.io.Serializable, MODEL> {

	List<MODEL> findAll() throws BusinessException;

	ResponseGrid<MODEL> findAllPaginated(RequestGrid requestGrid) throws BusinessException;

	void create(MODEL model) throws BusinessException;

	MODEL findByPK(PK pk) throws BusinessException;

	void update(MODEL model) throws BusinessException;

	void delete(MODEL model) throws BusinessException;

}
