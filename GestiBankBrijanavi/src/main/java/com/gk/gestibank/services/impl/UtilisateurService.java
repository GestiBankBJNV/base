package com.gk.gestibank.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.UtilisateurDao;
import com.gk.gestibank.model.Utilisateur;
import com.gk.gestibank.services.IUtilisateurService;

@Service
public class UtilisateurService implements IUtilisateurService {

	@Autowired
	UtilisateurDao utilisateurDao;
	
	public Utilisateur getUtilisateur(String nomUtilisateur, String mdp) {
		
		return utilisateurDao.getUtilisateur(nomUtilisateur, mdp);
	}

}
