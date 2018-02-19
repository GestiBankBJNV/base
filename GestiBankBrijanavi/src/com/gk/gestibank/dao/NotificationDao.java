package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface NotificationDao {
	List<Notification> getByClient(int clientId);
	boolean delete(Notification notification);
	boolean addToClient(int clientId, Notification notification);
	boolean update(Notification notification);
}
