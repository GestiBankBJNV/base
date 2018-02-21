package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;

public interface ClientDao {

	public List<Client> getAll();
	public void createClient(Client client);
	public void updateClient(Client client);
	public void deleteClient(int id);
	public List<Client> getClientByNameOrId(String recherche);
	public Client getClientById(int clientId);
	public List<DemandeClient> getDemandeByClientId(int id);
	public void UpdateDemandeByClientId(int idclient, DemandeClient demande);

}
