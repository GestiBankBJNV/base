package com.gk.gestibank.services.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.services.IClientService;

@Service
public class ClientService implements IClientService {
	
	@Autowired
	private ClientDao clientDao;

	
	public List<Client> getAll() {
		
		return clientDao.getAll();
	}

	
	public void createClient(Client client) {
		clientDao.createClient(client);

	}

	
	public void deleteClient(int id) {
		clientDao.deleteClient(id);

	}

	
	public void updateClient(Client client) {
		clientDao.updateClient(client);

	}
	
	
	public Client getClientById(int id){
		
		return clientDao.getClientById(id);
	}

	
	public List<Client> getClientByNameOrId(String recherche) {
		
		return clientDao.getClientByNameOrId(recherche);
	}


	public List<DemandeClient> getDemandeClientById(int id) {
		return clientDao.getDemandeByClientId(id);
	}


	public void UpdateDemandeByClientId(int idclient, int iddemande) {
		// a faire clientDao.up
		
	}
	
	

}
