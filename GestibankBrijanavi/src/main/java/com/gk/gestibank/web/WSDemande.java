package com.gk.gestibank.web;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.DemandeModif;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.services.impl.DemandeService;

@RestController
@Path("/demandes")
public class WSDemande {
	
	@Autowired
	DemandeService demandeService;

	@GET
	@Path("/inscriptions")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeInscription> getAll(){
		dbgLog("Get all inscriptions");
		return demandeService.getDemandesInscription();
	}
	
	@GET
	@Path("/inscriptions/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public DemandeInscription getDemandeInscrById(@PathParam("id") int id){
		dbgLog("Get inscription by ID : " + id);
		return demandeService.getDemandeInscrById(id);
	}
	
	@PUT
	@Path("/inscriptions")
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
		dbgLog("Update inscription");
		demandeService.updateDemandeInscription(demandeInscr);
	}
	
	@POST
	@Path("/client/{clientId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void sendDemandeClient(@PathParam("clientId") int clientId, DemandeClient demandeClient){
		dbgLog("Send demande client");		
		demandeService.sendDemandeClient(clientId, demandeClient);		
	}
	
	@POST
	@Path("/modif/{clientId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void sendDemandeModif(@PathParam("clientId") int clientId, DemandeModif demandeModif){
		dbgLog("Send demande modif");
		System.out.println(demandeModif);
		//demandeService.sendDemandeModif(clientId, demandeModif);		
	}
	
	//DEBUG
	void dbgLog(String log){
		System.out.println("SERVICE DEMANDE - " + log);
	}
}
