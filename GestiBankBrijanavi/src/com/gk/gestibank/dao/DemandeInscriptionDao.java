package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.DemandeInscription;

public interface DemandeInscriptionDao {
	List<DemandeInscription> getDemandesInscription();
	DemandeInscription getDemandeInscrById(int id);
	void updateDemandeInscription(DemandeInscription demandeInscr);
}
