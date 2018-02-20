package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.CompteDao;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

@Repository
public class CompteDaoImpl implements CompteDao {


	public List<Compte> getAll() {
		// TODO Auto-generated method stub
		return null;
	}


	public void createCompte(Compte compte) {
		// TODO Auto-generated method stub

	}


	public void deleteCompte(int code) {
		// TODO Auto-generated method stub

	}


	public void updateMontant(double montant) {
		// TODO Auto-generated method stub

	}


	public List<Operation> getAllOperationsFromCompte(int code) {
		// TODO Auto-generated method stub
		return null;
	}


	public Compte getCompteByCode(int code) {
		// TODO Auto-generated method stub
		return null;
	}


	public List<Compte> getByClient(int clientId) {
		List<Compte> l = new ArrayList<Compte>();
		List<Operation> o = new ArrayList<Operation>();
		l.add(new Compte(123456789,1500d, o, 1d));
		l.add(new Compte(10111213,2500d, o, 1d));
		l.add(new CompteEpargne(14151617,500d, o, 1d,4.5f));
		l.add(new Compte(18192021,500d, o, 1d));
		return l;
	}

}
