package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.OperationDao;
import com.gk.gestibank.model.Operation;

@Repository
public class OperationDaoImpl implements OperationDao {

	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public List<Operation> getByCompte(int compteId) {
		Query q = em.createQuery("SELECT o FROM Operation o WHERE compte = " + compteId);
		return (List<Operation>)q.getResultList();
		/*
		List<Operation> l = new ArrayList<Operation>();

		l.add(new Operation(13, "retrait", new Date(), 100d, "operation_type_credit"));
		l.add(new Operation(14, "retrait", new Date(), 100d, "operation_type_credit"));
		l.add(new Operation(15, "retrait", new Date(), 100d, "operation_type_credit"));
		l.add(new Operation(16, "versement", new Date(), 100d, "operation_type_debit"));
		l.add(new Operation(17, "versement", new Date(), 100d, "operation_type_debit"));
		l.add(new Operation(18, "retrait", new Date(), 100d, "operation_type_credit"));
		l.add(new Operation(19, "retrait", new Date(), 100d, "operation_type_credit"));
		// TODO Auto-generated method stub
		return l;*/
	}

}
