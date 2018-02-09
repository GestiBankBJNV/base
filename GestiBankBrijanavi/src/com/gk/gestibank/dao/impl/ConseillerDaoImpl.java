package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;

public class ConseillerDaoImpl implements ConseillerDao {
	
	public ArrayList<Conseiller> conseillers = new ArrayList<Conseiller>() ; // todo : remplacer par SessionFactory... (acc�s �a la BDD)

	@Override
	public List<Conseiller> getAll() {
		return conseillers;
	}

	@Override
	public void createConseiller(Conseiller conseiller) {
		conseillers.add(conseiller);
	}

	@Override
	public void updateConseiller(Conseiller conseiller) {	
		// TODO Auto-generated method stub
	}

	@Override
	public void deleteConseiller(String matricule) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Conseiller getConseillerByNameOrMatricule(String nom,
			String matricule) {
		// TODO Auto-generated method stub
		return null;
	}
}
