package com.gk.gestibank.web;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Notification;
import com.gk.gestibank.service.notification.NotificationService;

@RestController
@Path("/notifications")
public class WSNotification {
	@Autowired
	NotificationService notificationService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Notification> getAll(){
		return notificationService.getAll();
	}
}
