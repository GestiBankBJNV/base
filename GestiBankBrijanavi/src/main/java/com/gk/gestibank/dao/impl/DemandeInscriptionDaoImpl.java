package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.DemandeInscriptionDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

@Repository
public class DemandeInscriptionDaoImpl implements DemandeInscriptionDao {
	
	private List<DemandeInscription> demInscriptions = new ArrayList<DemandeInscription>();
	
	@PersistenceContext
	private EntityManager em;

	public DemandeInscriptionDaoImpl() {
		//chargerDemandes();
	}

	public void chargerDemandes() {
		Bouchons b = new Bouchons();
		demInscriptions = b.getDemInscriptions();
	}
	
	
	public List<DemandeInscription> getDemandesInscription() {
		//return demInscriptions;
		Query query = em.createQuery("SELECT dI FROM DemandeInscription as dI");
		return (List<DemandeInscription>)query.getResultList();
	}
	
	
	public DemandeInscription getDemandeInscrById(int id) {
//		for(DemandeInscription d : demInscriptions) {
//			if(d.getId() == id) {
//				return d;
//			}
//		}
//		return null;
		return em.find(DemandeInscription.class, id);
	}
	
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
//		int i = demInscriptions.indexOf(demandeInscr);
//		demInscriptions.set(i, demandeInscr);
		em.merge(demandeInscr);
	}

	public void addDemandeInscription(DemandeInscription demandeInscr) {
		em.persist(demandeInscr);
	}

}
