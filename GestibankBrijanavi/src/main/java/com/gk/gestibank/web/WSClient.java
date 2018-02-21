package com.gk.gestibank.web;

import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.services.IClientService;
import com.gk.gestibank.services.impl.ClientService;
import com.gk.gestibank.model.DemandeClient;

@RestController
@Path("/clients")
public class WSClient {
	
	@Autowired
	IClientService clientService;
	
	public WSClient(){		
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Client> getAll(){
		return clientService.getAll();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}/demandes")
	public List<DemandeClient> getDemandeByClientid(@PathParam("id")int id){
		return clientService.getDemandeClientById(id);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{recherche}")
	public List<Client> getClientByNameOrId(@PathParam("recherche")String recherche){
		return clientService.getClientByNameOrId(recherche);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("client/{idclient}/demande")
	public void UpdateDemandeByClientId(@PathParam("idclient")int idclient, @PathParam("iddemande")int iddemande){
		//a faire clientService.up
		clientService.UpdateDemandeByClientId(idclient, iddemande);
	}
}
