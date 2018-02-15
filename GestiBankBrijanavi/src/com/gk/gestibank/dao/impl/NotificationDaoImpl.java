package com.gk.gestibank.dao.impl;

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
	public List<Notification> getByClient(String clientId) {
		return clientDao.getClientById(clientId).getNotifications();		
	}

}
