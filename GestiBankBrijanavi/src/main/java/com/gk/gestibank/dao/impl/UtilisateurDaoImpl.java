package com.gk.gestibank.dao.impl;


import javax.persistence.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;


import com.gk.gestibank.dao.UtilisateurDao;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.Utilisateur;

@Repository
public class UtilisateurDaoImpl implements UtilisateurDao {
	
	@PersistenceContext
	EntityManager em;


	public void demanderInscription(DemandeInscription demandeInscription) {
		// TODO Auto-generated method stub

	}

	public Utilisateur getUtilisateur(String nomUtilisateur, String mdp) {
		
		Query q = em.createQuery("SELECT u FROM Utilisateur AS u WHERE u.nomUtilisateur =:nomUtilisateur AND u.password=:mdp")
				.setParameter("nomUtilisateur",nomUtilisateur)
				.setParameter("mdp", mdp);
		
		return (Utilisateur)q.getSingleResult();
	}

}
