package com.gk.gestibank.service.notification;

import java.util.List;

import com.gk.gestibank.model.Notification;

public interface INotificationService {
	List<Notification> getByClient(String clientId);
	boolean delete(String notificationId);
	boolean addToClient(String clientId, Notification notification);
}
