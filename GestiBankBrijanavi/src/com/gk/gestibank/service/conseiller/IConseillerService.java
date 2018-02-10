package com.gk.gestibank.service.conseiller;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;

public interface IConseillerService {

	public List<Conseiller> getAll();
	public void createConseiller(Conseiller conseiller);
	public void deleteConseiller(String matricule);
	public void updateConseiller(Conseiller conseiller);
	public Conseiller getConseillerByNameOrMatricule(String recherche);
	public void addClientToConseiller(Client client, String matricule);
	public void deleteClientFromConseiller(int idClient, String matricule);

}
