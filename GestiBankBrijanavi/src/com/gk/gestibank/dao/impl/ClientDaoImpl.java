package com.gk.gestibank.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.model.Client;

@Repository
public class ClientDaoImpl implements ClientDao {

	public ClientDaoImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<Client> getAll() {
		// TODO Auto-generated method stub
		return null;
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
	public void getClientByName(String nom) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public Client getClientById(String clientId){
		return new Client();
	}

}
