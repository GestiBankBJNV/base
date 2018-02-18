package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

@Repository
public class ConseillerDaoImpl implements ConseillerDao {
	
	public ArrayList<Conseiller> conseillers = new ArrayList<Conseiller>() ; // todo : remplacer par SessionFactory... (acc�s � la BDD)
	
	public ConseillerDaoImpl() {
		chargerConseillers();
	}
	
	public void chargerConseillers(){
		Bouchons b = new Bouchons();
		conseillers = b.getConseillers();
	}

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
		int i = conseillers.indexOf(conseiller);
		try {
			conseillers.set(i, conseiller);
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("L'index " + i + " ne fait pas partie de la liste conseillers");
		}	
	}

	@Override
	public void deleteConseiller(String matricule) {
		for(Conseiller c : conseillers){
			if(c.getMatricule().equals(matricule)){
				conseillers.remove(c);
				break;
			}
		}
	}


	@Override
	public Conseiller getConseillerByMatricule(String matricule) {
		for(Conseiller c : conseillers){
			if(c.getMatricule().equals(matricule)){
				return c;
			}
		}
		return null;
	}	
	
	@Override
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche) {
		List<Conseiller> l = new ArrayList<Conseiller>();
		for(Conseiller c : conseillers){
			if(c.getNom().matches(recherche) || c.getMatricule().equals(recherche)){
				l.add(c);
			}
		}
		return l;
	}

	@Override
	public List<Client> getClientsFromConseiller(String matricule) {
		Conseiller c = getConseillerByMatricule(matricule);
		if(c != null) {
			return c.getClients();
		}
		return new ArrayList<Client>();
	}

	@Override
	public void addClientToConseiller(Client client, String matricule) {
		List<Client> clients = getClientsFromConseiller(matricule);
		clients.add(client);
		getConseillerByMatricule(matricule).setClients(clients);		
	}

	@Override
	public void deleteClientFromConseiller(int idClient, String matricule) {
		List<Client> clients = getClientsFromConseiller(matricule);
		Client client = new Client();
		client.setId(idClient);
		clients.remove(client);
		getConseillerByMatricule(matricule).setClients(clients);
	}

	@Override
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule) {
		Conseiller c = getConseillerByMatricule(matricule);
		return c.getDemandesInscription();
	}
	
	@Override
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule) {
		List<DemandeInscription> inscription = getInscriptionsFromConseiller(matricule);
		inscription.add(demandeInscription);
		getConseillerByMatricule(matricule).setDemandesInscription(inscription);		
	}

}
