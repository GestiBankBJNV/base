package org.javasavvy.rest.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.RestController;

@RestController
@Path("/test")
public class TestRest {

	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String test(){
		return "hello!";
	}
}
