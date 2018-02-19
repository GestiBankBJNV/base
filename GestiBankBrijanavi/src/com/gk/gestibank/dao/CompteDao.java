package com.gk.gestibank.dao;

import java.util.List;
import java.util.Set;

import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

public interface CompteDao {

	public List<Compte> getAll();
	public void createCompte(Compte compte);
	public void deleteCompte(int code);
	public void updateMontant(double montant);
	public List<Operation> getAllOperationsFromCompte(int code);
	public Compte getCompteByCode(int code);
	public List<Compte> getByClient(int clientId);
}
