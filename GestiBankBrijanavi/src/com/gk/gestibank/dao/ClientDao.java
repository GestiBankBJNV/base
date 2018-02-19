package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;

public interface ClientDao {

	public List<Client> getAll();
	public void createClient(Client client);
	public void updateClient(Client client);
	public void deleteClient(int id);
	public Client getClientByName(String nom);
	public Client getClientById(String id);
	public List<DemandeClient> getAllDemandeClient(int id);

}
