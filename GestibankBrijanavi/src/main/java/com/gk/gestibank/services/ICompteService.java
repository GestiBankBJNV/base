package com.gk.gestibank.services;

import java.util.List;
import java.util.Set;

import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

public interface ICompteService {
	List<Compte> getCurrentByClient(int clientId);
	List<CompteEpargne> getSavingByClient(int clientId);
	List<Operation> getOperationsByCompte(int compteId);
}
