package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

@Component
public class ConseillerDaoImpl implements ConseillerDao {
	
	public ArrayList<Conseiller> conseillers = new ArrayList<Conseiller>() ; // todo : remplacer par SessionFactory... (acc�s � la BDD)
	
	public ConseillerDaoImpl() {
		chargerConseillers();
	}
	
	public void chargerConseillers(){
		List<Client> clients = new ArrayList<Client>();
		Client cl = new Client();
		cl.setNom("Test");
		cl.setId(1);
		clients.add(cl);
		
		Conseiller c1 = new Conseiller(1, "Jeanne", "Grelier", "Jaja", "1234", 
				"j@email.com", "0658654236", "conseiller", 
				"425A", new Date(), clients, 
				new ArrayList<DemandeInscription>());
		Conseiller c2 = new Conseiller(2, "JD", "Eymann", "Jdeon", "1234", 
				"jd@email.com", "0657894236", "conseiller", 
				"426A", new Date(), new ArrayList<Client>(), 
				new ArrayList<DemandeInscription>());
		Conseiller c3 = new Conseiller(3, "Jojo", "Lapin", "Jojo", "1234", 
				"jo@email.com", "0658656546", "conseiller", 
				"427A", new Date(), new ArrayList<Client>(), 
				new ArrayList<DemandeInscription>());
		
		conseillers.add(c1);
		conseillers.add(c2);
		conseillers.add(c3);
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
		conseillers.set(i, conseiller);
	}

	@Override
	public void deleteConseiller(String matricule) {
		for(Conseiller c : conseillers){
			if(c.getMatricule() == matricule){
				conseillers.remove(c);
				break;
			}
		}
	}

	@Override
	public Conseiller getConseillerByNameOrMatricule(String recherche) {
		for(Conseiller c : conseillers){
			if(c.getNom() == recherche || c.getMatricule() == recherche ){
				return c;
			}
		}
		return null;
	}

	@Override
	public List<Client> getClientsFromConseiller(String matricule) {
		Conseiller c = getConseillerByNameOrMatricule(matricule);
		return c.getClients();
	}

	@Override
	public void addClientToConseiller(Client client, String matricule) {
		List<Client> clients = getClientsFromConseiller(matricule);
		clients.add(client);
		
		getConseillerByNameOrMatricule(matricule).setClients(clients);		
	}

	@Override
	public void deleteClientFromConseiller(int idClient, String matricule) {
		List<Client> clients = getClientsFromConseiller(matricule);
		Client client = new Client();
		client.setId(idClient);
		clients.remove(client);
		
		getConseillerByNameOrMatricule(matricule).setClients(clients);
		
	}

	@Override
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule) {
		Conseiller c = getConseillerByNameOrMatricule(matricule);
		return c.getDemandesInscription();
	}
	
	@Override
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule) {
		List<DemandeInscription> inscription = getInscriptionsFromConseiller(matricule);
		inscription.add(demandeInscription);
		
		getConseillerByNameOrMatricule(matricule).setDemandesInscription(inscription);		
	}	

}
