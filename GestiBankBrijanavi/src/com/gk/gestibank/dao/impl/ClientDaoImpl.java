package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Client;

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

	@Override
	public List<Client> getAll() {
		
		return clients;
	}

	@Override
	public void updateClient(Client client) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void createClient(Client client) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteClient(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Client> getClientByNameOrId(String recherche) {
		for(Client c: clients){
			if(recherche.matches(c.getNom()) || recherche.equals(c.getId())){
				clients.add(c);
			}
		}
		return clients;		
	}
	
	public Client getClientById(String id){
		Client client = new Client();
		for(Client c: clients){
			if(id.equals(c.getId())){
				client = c;
			}
		}
		return client;
		
	}
	
}
