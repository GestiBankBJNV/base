package com.gk.gestibank.web;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
<<<<<<< HEAD
import com.gk.gestibank.model.DemandeInscription;
=======
import com.gk.gestibank.model.DemandeClient;
>>>>>>> Nassim
import com.gk.gestibank.service.conseiller.ConseillerService;

@RestController
@Path("/conseillers")
public class WSConseiller {

	@Autowired
	ConseillerService conseillerService;
	

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
	@Produces(MediaType.APPLICATION_JSON)
	public Conseiller updateConseiller(Conseiller conseiller){
		conseillerService.updateConseiller(conseiller);
		return conseiller;
	}
	
	@GET	
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{ matricule }/clients")
	public List<Client> getClientsFromConseiller(@PathParam("matricule") String matricule) {
		return conseillerService.getClientsFromConseiller(matricule);	
	}
	
<<<<<<< HEAD
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void addConseiller(Conseiller conseiller){
		conseillerService.createConseiller(conseiller);
	}
=======
//	// Création du service client au préalable
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	@Path("/clients/{id}")
//	public Set<DemandeClient> getDemandeClientsFromClient(@PathParam("id") String id){
//				
//		return null;
//	}
	
>>>>>>> Nassim

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
	
	@DELETE
	@Path("/{ matricule }/clients/{ idClient }")
	public void deleteClientFromConseiller(@PathParam("idClient") int idClient, @PathParam("matricule") String matricule) {
		conseillerService.deleteClientFromConseiller(idClient, matricule);
	}
}
