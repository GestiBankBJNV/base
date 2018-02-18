package com.gk.gestibank.service;

import java.util.List;
import java.util.Set;

import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.Client;

public interface IClientService {
	
	public List<Client> getAll();
	public void createClient(Client client);
	public void deleteClient(int id);
	public void updateClient(Client client);
	public Set<DemandeClient> getDemandeClientById(String id);
	public Client getClientById(String id);
	public List<Client> getClientByNameOrId(String recherche);
	
}