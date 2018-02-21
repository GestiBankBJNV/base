package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Client;
<<<<<<< HEAD
import com.gk.gestibank.model.Conseiller;
=======
import com.gk.gestibank.model.DemandeClient;
>>>>>>> Nassim

@Repository
public class ClientDaoImpl implements ClientDao {
	
	List<Client> clients = new ArrayList<Client>();
	
	@PersistenceContext
	private EntityManager em;

	public ClientDaoImpl() {
		//chargerClients();
	}
	
	public void chargerClients(){
		Bouchons b = new Bouchons();
		clients = b.getClients();
	}
	
	public List<Client> getAll() {		
		//return clients;
		Query query = em.createQuery("SELECT c FROM Client as c WHERE isClient=1");
		return (List<Client>)query.getResultList();
	}
	
	public void updateClient(Client client) {
		// TODO Auto-generated method stub		
	}

	public void createClient(Client client) {
		em.persist(client);		
	}

	public void deleteClient(int id) {
		// TODO Auto-generated method stub
	}

	public List<Client> getClientByNameOrId(String recherche) {
		for(Client c: clients){
			if(recherche.matches(c.getNom()) || recherche.equals(c.getId())){
				clients.add(c);
			}
		}
		return clients;		
	}
	
	
	public Client getClientById(String id){
		return getClientById(Integer.valueOf(id));		
	}

	public Client getClientById(int clientId){
		Client client = new Client();
		for(Client c: clients){
			if(clientId == c.getId()){
				client = c;
			}
		}
		return client;
		
	}

	public List<DemandeClient> getDemandeByClientId(int id) {
		return clients.get(id).getDemandes();
	}

	public void UpdateDemandeByClientId(int idclient, DemandeClient demande) {
		//à faire
//		for(Client c: clients){
//			if(c.getId() == idclient){
//				c.setDemandes(demandes);
//			}
//		}
	}
	
	
}
