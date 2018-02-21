package com.gk.gestibank.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.dao.CompteDao;
import com.gk.gestibank.dao.DemandeClientDao;
import com.gk.gestibank.dao.DemandeModifDao;
import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.DemandeModif;
import com.gk.gestibank.model.Notification;

@Repository
public class DemandeModifDaoImpl implements DemandeModifDao {

	@Autowired
	ClientDao clientDao;
	@Autowired
	CompteDao compteDao;
	@Autowired
	NotificationDao notificationDao;
	@Autowired
	DemandeClientDao demandeClientDao;
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public void addToClient(int clientId, DemandeModif demandeModif) {
		// TODO Auto-generated method stub
		List<Notification> ln = notificationDao.getByClient(clientId);
		List<Compte> lc = compteDao.getCurrentByClient(clientId);
		List<DemandeClient> ld = demandeClientDao.getByClient(clientId);		
		ld.add(demandeModif);		
		Client client = clientDao.getClientById(clientId);
		client.setNotifications(ln);
		client.setComptes(lc);
		client.setDemandes(ld);
		//em.merge(client);
		
		clientDao.updateClient(client);
	}

}
