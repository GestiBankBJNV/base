package com.gk.gestibank.services;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface INotificationService {
	List<Notification> getByClient(int clientId);
	boolean delete(int notificationId);
	boolean addToClient(int clientId, Notification notification);
	boolean update(Notification notification);
}
