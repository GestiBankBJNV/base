package com.gk.gestibank.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.service.INotificationService;

@Service
public class NotificationService implements INotificationService {
	

	@Autowired
	private NotificationDao notificationDao;
	
	@Override
	public List<Notification> getByClient(int clientId){
		return notificationDao.getByClient(clientId);
	}

	@Override
	public boolean delete(int notificationId){
		return notificationDao.delete(notificationId);
	}
	
	@Override
	public boolean addToClient(int clientId, Notification notification){
		return notificationDao.addToClient(clientId, notification);		
	}
	
	@Override
	public boolean update(Notification notification){
		return notificationDao.update(notification);
	}
	
}
