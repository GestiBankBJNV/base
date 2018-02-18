package com.gk.gestibank.test.conseiller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestAddClient {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
		
		Client client = new Client();
		client.setId(10);
		client.setPrenom("Jean");
		client.setNom("Dupont");
		client.setEmail("jean@email.com");
		gestionConseillers.addClientToConseiller(client, "427A");
		
		System.out.println(gestionConseillers.getConseillerByNameOrMatricule("427A"));
		
	}

}
// 13/02/2018 Test ok