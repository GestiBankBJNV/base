package com.gk.gestibank.service.notification;


import java.util.List;

import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.NotificationDao;
import com.gk.gestibank.model.Notification;

@Service
public class NotificationService implements INotificationService {
	

	@Autowired
	private NotificationDao notificationDao;
	
	@Override
	public List<Notification> getByClient(String clientId){
		return notificationDao.getByClient(clientId);
	}

	@Override
	public boolean delete(String notificationId){
		return notificationDao.delete(notificationId);
	}
	
	@Override
	public boolean addToClient(String clientId, Notification notification){
		return notificationDao.addToClient(clientId, notification);
	}
	
}
