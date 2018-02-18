package com.gk.gestibank.test.conseiller;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestAll {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
				
		List<Conseiller> conseillers = gestionConseillers.getAll();
		for(Conseiller c : conseillers){
			System.out.println(c.toString());
		}
		
	}

}
// 13/02/2018 Test ok