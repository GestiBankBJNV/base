package com.gk.gestibank.web;

import java.util.ArrayList;
import java.util.List;







import javax.persistence.Query;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.model.Operation;
import com.gk.gestibank.services.impl.CompteService;


@RestController
@Path("/comptes")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class WSCompte {
	
	//Service
	@Autowired
	CompteService compteService;
	
	//Constructeur
	public WSCompte(){}

	/**
	 * Récupérer tous les comptes d'un client
	 * @param clientId : ID du client
	 * @return List<Notification>
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/current/{clientId}")
	public List<Compte> getComptesCourantByClient(@PathParam("clientId") int clientId){
		dbgLog("Get current by client " + clientId);
		return compteService.getCurrentByClient(clientId);
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/saving/{clientId}")
	public List<CompteEpargne> getComptesEpargneByClient(@PathParam("clientId") int clientId){
		dbgLog("Get current by client " + clientId);
		return compteService.getSavingByClient(clientId);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/operations/{compteId}")
	public List<Operation> getOperationsByCompte(@PathParam("compteId") int compteId){
		dbgLog("Get operations by compte " + compteId);
		return compteService.getOperationsByCompte(compteId);
	}
	
	@GET
	@Path("/createDummy")
	public void createDummyAccount(){
		dbgLog("Create dummy Account");
	}
	
	
	
	//DEBUG (juste pour vérifier qu'on passe bien par les fonctions)
	private void dbgLog(String log){
		System.out.println("SERVICE COMPTE - " + log);
	}
}
