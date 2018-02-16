package com.gk.gestibank.service;

import java.util.List;

import com.gk.gestibank.model.DemandeInscription;

public interface IDemandeService {
	
	// Demandes d'inscription
	List<DemandeInscription> getDemandesInscription();
	DemandeInscription getDemandeInscrById(int id);
	void updateDemandeInscription(DemandeInscription demandeInscr);
	
	// Demandes client
	// TODO
}
