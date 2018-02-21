package com.gk.gestibank.services;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface INotificationService {
	List<Notification> getByClient(int clientId);
	void delete(int clientId, int notificationId);
	void addToClient(int clientId, Notification notification);
	void update(int clientId, Notification notification);
}
