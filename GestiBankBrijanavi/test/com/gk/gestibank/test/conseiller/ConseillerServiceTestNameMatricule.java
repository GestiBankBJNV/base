package com.gk.gestibank.test.conseiller;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestNameMatricule {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
		
		System.out.println(gestionConseillers.getConseillerByNameOrMatricule("426A"));
		
	}

}
// 13/02/2018 Test ok