package com.gk.gestibank.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.dao.CompteDao;
import com.gk.gestibank.dao.DemandeClientDao;
import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.Notification;

@Repository
public class DemandeClientDaoImpl implements DemandeClientDao {

	@Autowired
	ClientDao clientDao;
	@Autowired
	CompteDao compteDao;
	@Autowired
	NotificationDao notificationDao;
	
	@PersistenceContext
	EntityManager em;
	
	@Transactional
	public List<DemandeClient> getByClient(int clientId) {
		Query q = em.createQuery("SELECT dc FROM DemandeClient dc WHERE client = " + clientId);
		return (List<DemandeClient>)q.getResultList();
	}
	
	@Transactional
	public void addToClient(int clientId, DemandeClient demandeClient){
		List<Notification> ln = notificationDao.getByClient(clientId);
		List<Compte> lc = compteDao.getCurrentByClient(clientId);
		List<DemandeClient> ld = getByClient(clientId);
		
		ld.add(demandeClient);		
		Client client = clientDao.getClientById(clientId);
		client.setNotifications(ln);
		client.setComptes(lc);
		client.setDemandes(ld);
		//em.merge(client);
		
		clientDao.updateClient(client);
	}

}
