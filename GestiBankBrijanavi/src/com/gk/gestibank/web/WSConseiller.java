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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Conseiller;
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

}
