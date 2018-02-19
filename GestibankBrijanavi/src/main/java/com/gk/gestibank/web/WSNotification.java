package com.gk.gestibank.web;

import java.util.List;

import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Notification;
import com.gk.gestibank.services.impl.NotificationService;

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
	 * @return List<Notification>
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{clientId}")
	public List<Notification> getByClient(@PathParam("clientId") int clientId){
		dbgLog("Get by client" + clientId);
		return notificationService.getByClient(clientId);
	}
	
	/**
	 * Supprimer une notification
	 */
	@DELETE
	@Path("/{notificationId}")
	public boolean delete(@PathParam("notificationId") int notificationId){
		dbgLog("Delete");
		return notificationService.delete(notificationId);
	}
	
	/**
	 * Ajouter une notification à la liste d'un client
	 * @param clientId : ID du client
	 * @param notification : Notification (JSON)
	 */	
	@POST
	@Path("/{clientId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean addToClient(@PathParam("clientId") int clientId, Notification notification){
		dbgLog("Add to client");
		return notificationService.addToClient(clientId, notification);
	}
	
	/**
	 * Marquer la notification comme lue
	 * @param notificationId
	 * @return
	 */
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean update(Notification notification) {
		dbgLog("Update");
		return notificationService.update(notification);
	}
	
	//DEBUG (juste pour vérifier qu'on passe bien par les fonctions)
	private void dbgLog(String log){
		System.out.println("SERVICE NOTIFICATION - " + log);
	}
}
