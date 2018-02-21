package com.gk.gestibank.dao;

import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.Utilisateur;

public interface UtilisateurDao {
	
	
	public void demanderInscription(DemandeInscription demandeInscription);
	// todo: autres méthodes ?
	
	public Utilisateur getUtilisateur(String nomUtilisateur, String mdp);
}
