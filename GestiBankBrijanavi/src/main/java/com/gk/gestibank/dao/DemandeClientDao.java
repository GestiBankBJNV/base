package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.DemandeClient;

public interface DemandeClientDao {
	
	List<DemandeClient> getByClient(int clientId);
	void addToClient(int clientId, DemandeClient demandeClient);

}
