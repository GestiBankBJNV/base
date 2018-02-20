package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;

@Repository
public class ClientDaoImpl implements ClientDao {
	
	List<Client> clients = new ArrayList<Client>();

	public ClientDaoImpl() {
		chargerClients();
	}
	
	public void chargerClients(){
		Bouchons b = new Bouchons();
		clients = b.getClients();
	}

	
	public List<Client> getAll() {
		
		return clients;
	}

	
	public void updateClient(Client client) {
		// TODO Auto-generated method stub
		
	}

	public void createClient(Client client) {
		// TODO Auto-generated method stub
		
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
	
	
}
