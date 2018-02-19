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

	
	public boolean delete(int notificationId){
		return notificationDao.delete(notificationId);
	}
	
	
	public boolean addToClient(int clientId, Notification notification){
		return notificationDao.addToClient(clientId, notification);		
	}
	
	
	public boolean update(Notification notification){
		return notificationDao.update(notification);
	}
	
}
