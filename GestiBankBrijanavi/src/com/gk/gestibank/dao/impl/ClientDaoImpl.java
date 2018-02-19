package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeClient;

@Repository
public class ClientDaoImpl implements ClientDao {
	
	List<Client> clients = new ArrayList<Client>();
	List<DemandeClient> demandes = new ArrayList<DemandeClient>();
	
	

	public ClientDaoImpl() {
		
		//cr�ation d'une demande client
		DemandeClient demande = new DemandeClient(1, new Date(), new Date(), "en cours", "ch�quier");
		demandes.add(demande);// ajout de la demande dans une list
		
		Client c1 = new Client(2, "mari�e", null,"125 rue de la paix","lille", "59000", demandes, null);
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
	public List<DemandeClient> getAllDemandeClient(int id) {
		List<DemandeClient> dc = new ArrayList<DemandeClient>();
			for(Client c: clients){
				if(id == c.getId()){
					dc = c.getDemandes();
				}
			}		
			return dc;
	}
	
	
}
