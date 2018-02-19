package com.gk.gestibank.service.conseiller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;

@Service
public class ClientService implements IClientService {
	
	@Autowired
	private ClientDao clientDao;

	@Override
	public List<Client> getAll() {
		
		return clientDao.getAll();
	}

	@Override
	public void createClient(Client client) {
		clientDao.createClient(client);

	}

	@Override
	public void deleteClient(int id) {
		clientDao.deleteClient(id);

	}

	@Override
	public void updateClient(Client client) {
		clientDao.updateClient(client);

	}

	@Override
	public List<DemandeClient> getDemandeClientById(int id) {
		// ajouter la fonction de recherche des demande dans le ClientDao
		return clientDao.getAllDemandeClient(id);
	}
	
	@Override
	public Client getClientById(String id){
		
		return clientDao.getClientById(id);
	}

}
