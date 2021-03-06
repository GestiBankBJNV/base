package com.gk.gestibank.web;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
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
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.services.IConseillerService;
import com.gk.gestibank.services.impl.ConseillerService;

@RestController
@Path("/conseillers")
public class WSConseiller {

	@Autowired
	IConseillerService conseillerService;

	public WSConseiller() {
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Conseiller> getAll(){
		return conseillerService.getAll();
	}

	@GET	
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{ recherche }")
	public List<Conseiller> getConseillerByNameOrMatricule(@PathParam("recherche") String recherche){
		return conseillerService.getConseillerByNameOrMatricule(recherche);
	}
	
	@PUT	
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateConseiller(Conseiller conseiller){
		conseillerService.updateConseiller(conseiller);
	}
	
	@GET	
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{ matricule }/clients")
	public List<Client> getClientsFromConseiller(@PathParam("matricule") String matricule) {
		return conseillerService.getClientsFromConseiller(matricule);	
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void addConseiller(Conseiller conseiller){
		System.out.println("WSConseiller addConseiller()");
		conseillerService.createConseiller(conseiller);
	}

	@DELETE
	@Path("/{ matricule }")
	public void deleteConseiller(@PathParam("matricule") String matricule){
		conseillerService.deleteConseiller(matricule);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{ matricule }/inscriptions")
	public List<DemandeInscription> getInscriptionsFromConseiller(@PathParam("matricule") String matricule){
		return getInscriptionsFromConseiller(matricule);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/client/{ idClient }")
	public Conseiller getConseillerWithClient(@PathParam("idClient") int idClient) {
		return conseillerService.getConseillerWithClient(idClient);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/id/{ id }")
	public Conseiller getConseillerById(@PathParam("id") int id) {
		return conseillerService.getById(id);
	}
	
	@DELETE
	@Path("/clients/{ idClient }")
	public void deleteClientFromConseiller(@PathParam("idClient") int idClient) {
		conseillerService.deleteClientFromConseiller(idClient);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{idConseiller}/clients")
	public void changerConseiller(@PathParam("idConseiller") int idConseiller, Client client){
		conseillerService.changerConseiller(client.getId(), idConseiller);
	}
}
