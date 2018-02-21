package com.gk.gestibank.web;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Utilisateur;
import com.gk.gestibank.services.IUtilisateurService;
import com.gk.gestibank.services.impl.UtilisateurService;

@RestController
@Path("/utilisateurs")
public class WSUtilisateur {
	
	@Autowired
	IUtilisateurService utilisateurService;
	
	
	public WSUtilisateur(){
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{nomUtilisateur}/{mdp}")
	public Utilisateur getUtilisateur(@PathParam("nomUtilisateur")String nomUtilisateur,@PathParam("mdp") String mdp){
		return utilisateurService.getUtilisateur(nomUtilisateur, mdp); //utilisateurService
	}

}
