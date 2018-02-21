package com.gk.gestibank.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.services.INotificationService;

@Service
public class NotificationService implements INotificationService {
	

	@Autowired
	private NotificationDao notificationDao;
	
	
	public List<Notification> getByClient(int clientId){
		return notificationDao.getByClient(clientId);
	}

	
	public void delete(int clientId, int notificationId){
		notificationDao.delete(clientId, notificationId);
	}
	
	
	public void addToClient(int clientId, Notification notification){
		notificationDao.addToClient(clientId, notification);		
	}
	
	
	public void update(int clientId, Notification notification){
		notificationDao.update(clientId, notification);
	}
	
}
