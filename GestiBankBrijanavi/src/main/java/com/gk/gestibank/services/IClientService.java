package com.gk.gestibank.services;

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
	public Client getClientById(int id);
	public List<Client> getClientByNameOrId(String recherche);
	public void UpdateDemandeByClientId(int idclient, int iddemande);
	
}
