package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

<<<<<<< HEAD
=======
import org.apache.jasper.tagplugins.jstl.core.ForEach;
>>>>>>> Nassim
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Client;

@Repository
public class ClientDaoImpl implements ClientDao {
	
	List<Client> clients = new ArrayList<Client>();
	
	

	public ClientDaoImpl() {
		Client c1 = new Client(2, "mari�e", null,"125 rue de la paix","lille", "59000", null, null);
		clients.add(c1);
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
	public Client getClientByName(String nom) {
		// TODO Auto-generated method stub
		return null;
		
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
	
	@Override
	public Client getClientById(String clientId){
		return new Client();
	}

}
