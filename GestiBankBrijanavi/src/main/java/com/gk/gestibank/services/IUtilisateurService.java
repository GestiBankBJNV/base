package com.gk.gestibank.services;

import com.gk.gestibank.model.Utilisateur;


public interface IUtilisateurService {
	
	public Utilisateur getUtilisateur(String nomUtilisateur, String mdp);

}
