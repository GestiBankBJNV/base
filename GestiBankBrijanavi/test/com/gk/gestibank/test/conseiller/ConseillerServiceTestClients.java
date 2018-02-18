package com.gk.gestibank.test.conseiller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestClients {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
		
		System.out.println(gestionConseillers.getClientsFromConseiller("425A"));
		
	}

}
// 14/02/2018 Test ok