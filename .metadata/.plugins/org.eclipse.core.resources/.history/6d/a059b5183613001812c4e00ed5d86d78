package com.gk.gestibank.web;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Qualifier;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.server.model.ParamQualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Notification;
import com.gk.gestibank.service.notification.NotificationService;

@RestController
@Path("/notifications")
public class WSNotification {
	
	//Service
	@Autowired
	NotificationService notificationService;
	
	//Constructeur
	public WSNotification(){}

	/**
	 * Récupérer la liste de toutes les notifications d'un client
	 * @param clientId : ID du client
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/client/{clientId}")
	public List<Notification> getByClient(@PathParam("clientId") String clientId){
		return notificationService.getByClient(clientId);
	}
	
	/**
	 * Supprimer une notification
	 */
	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	public void delete(Notification notification){
		notificationService.delete(notification);
	}
	
	@POST
	@Path("/{clientId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addToClient(@PathParam("clientId") String clientId, Notification notification){
		notificationService.addToClient(clientId, notification);
	}
	
}
