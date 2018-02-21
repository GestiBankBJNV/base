package com.gk.gestibank.services;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.DemandeModif;

public interface IDemandeService {
	
	// Demandes d'inscription
	List<DemandeInscription> getDemandesInscription();
	DemandeInscription getDemandeInscrById(int id);
	void updateDemandeInscription(DemandeInscription demandeInscr);
	void addDemandeInscription(DemandeInscription demandeInscr);
	public void sendDemandeClient(int clientId, DemandeClient demandeClient);	
	public void sendDemandeModif(int clientId, DemandeModif demandeModif);	
}
