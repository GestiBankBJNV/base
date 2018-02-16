package com.gk.gestibank.web;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.service.conseiller.ClientService;

@RestController
@Path("/clients")
public class WSClient {
	
	@Autowired
	ClientService clientService;
	
	public WSClient(){
		
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Client> getAll(){
		return clientService.getAll();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public Client getClientById(@PathParam("id")String id){
		return clientService.getClientById(id);
	}
	
}