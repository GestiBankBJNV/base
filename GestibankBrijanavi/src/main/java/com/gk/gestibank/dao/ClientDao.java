package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Client;

public interface ClientDao {

	public List<Client> getAll();
	public void createClient(Client client);
	public void updateClient(Client client);
	public void deleteClient(int id);
	public List<Client> getClientByNameOrId(String recherche);
	public Client getClientById(int clientId);
	
	public void persist(Client client);
	public void refresh(Client client);
	public void merge(Client client);

}
