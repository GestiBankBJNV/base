package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;

public interface ConseillerDao {
	
	public List<Conseiller> getAll();
	public void createConseiller(Conseiller conseiller);
	public void updateConseiller(Conseiller conseiller);
	public void deleteConseiller(String Matricule);
	public Conseiller getConseillerByNameOrMatricule(String nom, String matricule);
}
