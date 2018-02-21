package com.gk.gestibank.dao;

import com.gk.gestibank.model.DemandeModif;

public interface DemandeModifDao {
	void addToClient(int clientId, DemandeModif demandeModif);
}
