package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface NotificationDao {
	List<Notification> getByClient(String clientId);
	void delete(Notification notification);
	void addToClient(String clientId, Notification notification);
	
}
