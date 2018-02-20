package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.FlushModeType;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Notification;

@Repository
public class NotificationDaoImpl implements NotificationDao {
	
	@Autowired
	ClientDao clientDao;
	
	@PersistenceContext
	EntityManager em;
	
	public NotificationDaoImpl(){}	
	
	
	@Transactional
	public List<Notification> getByClient(int clientId) {		
		Query q = em.createQuery("SELECT n FROM Notification n where client = " + clientId + " ORDER BY date DESC");
		return (List<Notification>)q.getResultList();		
	}
	
	@Transactional
	public void delete(int clientId, int notificationId){
		//System.out.println("Count before: " + getByClient(clientId).size());				
		Query q = em.createNamedQuery("Notification.delete").setParameter("id", notificationId);
		q.executeUpdate();
	}
	
	@Transactional
	public void addToClient(int clientId, Notification notification){
		List<Notification> l = getByClient(clientId);
		System.out.println("Count before: " + l.size());
		l.add(notification);
		Client client = clientDao.getClientById(clientId);
		client.setNotifications(l);
		//em.merge(client);
		clientDao.merge(client);
		System.out.println("Count after: " + l.size());
	}

	@Transactional
	public void update(int clientId, Notification notification) {			
		em.merge(notification);
		em.flush();
	}
	
	
}
