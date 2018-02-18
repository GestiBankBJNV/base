package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.ClientDao;
import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Notification;

@Repository
public class NotificationDaoImpl implements NotificationDao {
	
	@Autowired
	ClientDao clientDao;	
	
	public NotificationDaoImpl(){}	
	
	@Override
	public List<Notification> getByClient(int clientId) {
		
		//TODO : à remplacer
		List<Notification> l = new ArrayList<Notification>(); 
		
		for (int i=0; i < 20; i++) {
			Notification n = new Notification(new Date(),"Notification " + i, "notif", (i > 5));
			n.setId(i);
			l.add(n);
		}
		
		return l;
		//return clientDao.getClientById(clientId).getNotifications();		
	}
	
	@Override
	public boolean delete(int notificationId){
		//TODO
		return true;
	}
	
	@Override
	public boolean addToClient(int clientId, Notification notification){
		//TODO
		return true;
	}

	@Override
	public boolean update(int notificationId, Notification notification) {
		//TODO
		return true;
	}
}
