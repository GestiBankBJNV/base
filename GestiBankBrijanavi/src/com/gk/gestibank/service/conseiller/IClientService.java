package com.gk.gestibank.service.conseiller;

import java.util.List;
import java.util.Set;

import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.Client;

public interface IClientService {
	
	public List<Client> getAll();
	public void createClient(Client client);
	public void deleteClient(int id);
	public void updateClient(Client client);
	public List<DemandeClient> getDemandeClientById(int id);
	public Client getClientById(String id);

}
