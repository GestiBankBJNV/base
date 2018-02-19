package com.gk.gestibank.service.compte;

import java.util.List;
import java.util.Set;

import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

public interface ICompteService {
	List<Compte> getByClient(int clientId);
	List<Operation> getOperationsByCompte(int compteId);
}
