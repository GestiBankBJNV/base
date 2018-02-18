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
	public List<Notification> getByClient(String clientId){
		return notificationDao.getByClient(clientId);
	}

	@Override
	public void delete(Notification notification){
		notificationDao.delete(notification);
	}
	
	@Override
	public void addToClient(String clientId, Notification notification){
		notificationDao.addToClient(clientId, notification);		
	}
	
}