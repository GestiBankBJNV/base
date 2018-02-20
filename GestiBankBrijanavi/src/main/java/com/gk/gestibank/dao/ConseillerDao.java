package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

public interface ConseillerDao {
	
	public List<Conseiller> getAll();
	public void createConseiller(Conseiller conseiller);
	public void updateConseiller(Conseiller conseiller);
	public void deleteConseiller(String matricule);
	public Conseiller getConseillerByMatricule(String matricule);
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche);
	public List<Client> getClientsFromConseiller(String matricule);
	public void addClientToConseiller(Client client, String matricule);
	public void deleteClientFromConseiller(int idClient, String matricule);
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule);
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule);
	public void changerConseiller(int idClient, int idConseiller);
}
