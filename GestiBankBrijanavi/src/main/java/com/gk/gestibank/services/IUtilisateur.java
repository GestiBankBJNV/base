package com.gk.gestibank.services;

import com.gk.gestibank.model.Utilisateur;


public interface IUtilisateur {
	
	public Utilisateur getUtilisateur(String nomUtilisateur, String mdp);

}
