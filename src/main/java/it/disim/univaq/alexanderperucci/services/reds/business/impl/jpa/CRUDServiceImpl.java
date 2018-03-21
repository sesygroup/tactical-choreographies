package it.disim.univaq.alexanderperucci.services.reds.business.impl.jpa;

import it.disim.univaq.alexanderperucci.services.reds.business.BusinessException;
import it.disim.univaq.alexanderperucci.services.reds.business.CRUDService;
import it.disim.univaq.alexanderperucci.services.reds.business.RequestGrid;
import it.disim.univaq.alexanderperucci.services.reds.business.ResponseGrid;
import it.disim.univaq.alexanderperucci.services.reds.business.SearchField;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.transaction.annotation.Transactional;



public class CRUDServiceImpl<PK extends java.io.Serializable, MODEL> implements CRUDService<PK, MODEL> {

    protected Class<MODEL> persistentClass;
    
    @PersistenceContext
    protected EntityManager em;

    public CRUDServiceImpl() {
        this.persistentClass = (Class<MODEL>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1];

    }

    @Override
    @Transactional
    public List<MODEL> findAll() throws BusinessException {
        String sql = "from " + persistentClass.getSimpleName() + " order by id";
        Query q = em.createQuery(sql);
        return q.getResultList();
    }

    @Override
    @Transactional
    public ResponseGrid<MODEL> findAllPaginated(RequestGrid requestGrid) throws BusinessException {
        StringBuilder sql = new StringBuilder();
        StringBuilder sqlCount = new StringBuilder();
        sql.append("select distinct e ");
        sql.append(" from ");
        sql.append(persistentClass.getSimpleName()).append(" as e ");
        sql.append(" ");
        sqlCount.append("select count(distinct e) from ");
        sqlCount.append(persistentClass.getSimpleName()).append(" as e ");
        sqlCount.append(" ");



        /* gestione della ricerca per piu campi*/
        boolean addWhere = true;
        int index = 0;
        List<SearchField> searchFields =  requestGrid.getSearchFields();
        for (SearchField sf : searchFields) {
            try {
            if (!sf.isEmpty() && ConversionUtility.isCollectionFieldType(persistentClass, sf.getName())) {
                sql.append(" join ").append(" e.").append(sf.getNameRoot()).append(" as ").append(sf.getAlias()).append(" ");
                sqlCount.append(" join ").append(" e.").append(sf.getNameRoot()).append(" as ").append(sf.getAlias()).append(" ");
            }
            } catch (NoSuchFieldException e){
                 throw new BusinessException("Campo di ricerca non trovato", e);
            }
            
        }
        
        for (SearchField sf : searchFields) {
            if (!sf.isEmpty()) {
                if (addWhere) {
                    sql.append(" where ");
                    sqlCount.append(" where ");
                    addWhere = false;
                } else {
                    sql.append(" and ");
                    sqlCount.append(" and ");
                }
                try {
                    
                    if (ConversionUtility.isCollectionFieldType(persistentClass, sf.getName())) {
                        sql.append(sf.getNameAlias());
                        sqlCount.append(sf.getNameAlias());
                    } else {                        
                        sql.append(" e.").append(sf.getName());
                        sqlCount.append(" e.").append(sf.getName());
                    }
                    
                    if (sf.isIsNull()) {
                        sql.append(" IS NULL ");
                        sqlCount.append(" IS NULL ");
                    } else if (sf.isIsNotNull()) {
                        sql.append(" IS NOT NULL ");
                        sqlCount.append(" IS NOT NULL ");
                    } else {
                        String operand = ConversionUtility.getOperand(persistentClass, sf);
                        sql.append(operand);
                        sqlCount.append(operand);
                        if (sf.isRangeIn()) {
                            sql.append(" (:").append(sf.getNameParam()).append(") ");
                            sqlCount.append(" (:").append(sf.getNameParam()).append(") ");
                        } else {
                            sql.append(sf.getNameParam());
                            sqlCount.append(sf.getNameParam());
                        }
                    }

                } catch (NoSuchFieldException e) {
                    throw new BusinessException("Campo di ricerca non trovato", e);
                }
            }
        }

        boolean addAnd = true;
        /* gestione della ricerca tramite il campo unico*/

        if (!"".equals(requestGrid.getsSearch())) {
            for (SearchField sf : searchFields) {
                if (addWhere) {
                    sql.append(" where ");
                    sqlCount.append(" where ");
                    addWhere = false;
                } else {
                    sql.append(" and ");
                    sqlCount.append(" and ");
                }
                try {
                    sql.append(" e.").append(sf.getName());
                    sqlCount.append(" e.").append(sf.getName());
                    String operand = ConversionUtility.getOperand(persistentClass, sf);
                    sql.append(operand);
                    sqlCount.append(operand);                    
                    if (sf.isRangeIn()) {
                        sql.append(" (:").append("global_".concat(sf.getNameParam())).append(") ");
                        sqlCount.append(" (:").append("global_".concat(sf.getNameParam())).append(") ");
                    } else {
                        sql.append("global_".concat(sf.getNameParam()));
                        sqlCount.append("global_".concat(sf.getNameParam()));
                    }

                    
                } catch (NoSuchFieldException e) {
                    throw new BusinessException("Campo di ricerca non trovato", e);
                }
            }
            if (!addAnd) {
                sql.append(" ) ");
                sqlCount.append(" ) ");
            }
        }

        
        sql.append(" order by e.").append(requestGrid.getSortCol()).append(" ").append(requestGrid.getSortDir());

        Query query = em.createQuery(sql.toString());
        Query queryCount = em.createQuery(sqlCount.toString());
        index = 0;

        for (SearchField sf : searchFields) {
            if (!sf.isEmpty() && !sf.isIsNull() && !sf.isIsNotNull()) {
                try {
                    query.setParameter(sf.getNameParam(), ConversionUtility.getParamObject(persistentClass, sf.getName(), sf.getValue(), sf.isAddPercentPrefix(), !sf.isRange()));
                    queryCount.setParameter(sf.getNameParam(), ConversionUtility.getParamObject(persistentClass, sf.getName(), sf.getValue(), sf.isAddPercentPrefix(), !sf.isRange()));
                } catch (NoSuchFieldException e) {
                    throw new BusinessException("Campo di ricerca non trovato", e);
                }
            }
        }
        if (!"".equals(requestGrid.getsSearch())) {

            for (SearchField sf : searchFields) {

                try {
                    query.setParameter("global_".concat(sf.getNameParam()), ConversionUtility.getParamObject(persistentClass, sf.getName(), requestGrid.getsSearch(), false, true));
                    queryCount.setParameter("global_".concat(sf.getNameParam()), ConversionUtility.getParamObject(persistentClass, sf.getName(), requestGrid.getsSearch(), false, true));
                } catch (NoSuchFieldException e) {
                    throw new BusinessException("Campo di ricerca non trovato", e);
                }

            }
        }

        
        if (requestGrid.getiDisplayStart() > 0) {
            query.setFirstResult(requestGrid.getiDisplayStart());
        }
        if (requestGrid.getiDisplayLength() > 0) {
            query.setMaxResults(requestGrid.getiDisplayLength());
        }        
        List<MODEL> results = query.getResultList();
        long records = (Long) queryCount.getSingleResult();
        return new ResponseGrid<MODEL>(requestGrid.getsEcho(), records, records, results);
    }

    @Override
    @Transactional()
    public void create(MODEL model) throws BusinessException {
    	em.persist(model);
    }

    @Override
    @Transactional
    public MODEL findByPK(PK id) throws BusinessException {
        return (MODEL) em.find(persistentClass, id);
    }

    @Override
    @Transactional()
    public void update(MODEL model) throws BusinessException {
    	em.merge(model);
    }

    @Override
    @Transactional()
    public void delete(MODEL model) throws BusinessException {
        MODEL m = (MODEL)em.merge(model);
        em.remove(m);
    }


}
