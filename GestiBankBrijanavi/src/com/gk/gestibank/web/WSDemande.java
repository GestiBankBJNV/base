package com.gk.gestibank.web;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.impl.DemandeService;

@RestController
@Path("/demandes")
public class WSDemande {
	
	@Autowired
	DemandeService demandeService;

	@GET
	@Path("/inscriptions")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeInscription> getAll(){
		return demandeService.getDemandesInscription();
	}
	
	@GET
	@Path("/inscriptions/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public DemandeInscription getDemandeInscrById(@PathParam("id") int id){
		return demandeService.getDemandeInscrById(id);
	}
	
	@PUT
	@Path("/inscriptions")
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
		demandeService.updateDemandeInscription(demandeInscr);
	}
}