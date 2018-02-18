package com.gk.gestibank.service.notification;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface INotificationService {
	List<Notification> getByClient(int clientId);
	boolean delete(int notificationId);
	boolean addToClient(int clientId, Notification notification);
	boolean update(int notificationId, Notification notification);
}
