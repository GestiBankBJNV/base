package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface NotificationDao {
	List<Notification> getByClient(int clientId);
	void delete(int notificationId);
	void addToClient(int clientId, Notification notification);
	boolean update(Notification notification);
}
