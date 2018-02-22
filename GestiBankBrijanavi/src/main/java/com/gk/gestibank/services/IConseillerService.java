package com.gk.gestibank.services;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

public interface IConseillerService {

	public List<Conseiller> getAll();
	public void createConseiller(Conseiller conseiller);
	public void deleteConseiller(String matricule);
	public void updateConseiller(Conseiller conseiller);
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche);
	public void addClientToConseiller(Client client, String matricule);
	public void deleteClientFromConseiller(int idClient);
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule);
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule);
	public List<Client> getClientsFromConseiller(String matricule);
	public Conseiller getConseillerWithClient(int idClient);
	public void changerConseiller(int idClient, int idConseiller);
	public Conseiller getById(int id);
}
