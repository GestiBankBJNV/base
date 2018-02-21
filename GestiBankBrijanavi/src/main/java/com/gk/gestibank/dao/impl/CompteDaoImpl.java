package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.CompteDao;
import com.gk.gestibank.dao.OperationDao;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

@Repository
public class CompteDaoImpl implements CompteDao {
	
	@Autowired
	OperationDao operationDao;
	
	@PersistenceContext
	EntityManager em;

	public List<Compte> getAll() {
		Query q = em.createNamedQuery("Compte.getAll");
		return (List<Compte>)q.getResultList();
	}

	@Transactional
	public void createCompte(Compte compte) {
		em.persist(compte);
	}


	public void deleteCompte(int code) {
		Query q = em.createNamedQuery("Compte.delete").setParameter("code", code);
		q.executeUpdate();
	}


	public void updateMontant(double montant) {
		// TODO Auto-generated method stub

	}


	public List<Operation> getAllOperationsFromCompte(int code) {
		return operationDao.getByCompte(code);
	}


	public Compte getCompteByCode(int code) {
		Query q = em.createNamedQuery("Compte.getByIBAN").setParameter("code", code);
		return (Compte)q.getSingleResult();
	}


	public List<Compte> getCurrentByClient(int clientId) {
		Query q = em.createQuery("SELECT c FROM Compte c WHERE client = " + clientId);
		return (List<Compte>)q.getResultList();
	}
	
	public List<CompteEpargne> getSavingByClient(int clientId) {
		Query q = em.createQuery("SELECT c FROM Compte c WHERE client = " + clientId);
		return (List<CompteEpargne>)q.getResultList();
	}

}
