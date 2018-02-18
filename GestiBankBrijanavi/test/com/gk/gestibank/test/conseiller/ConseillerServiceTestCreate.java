package com.gk.gestibank.test.conseiller;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestCreate {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
		
		Conseiller conseiller = new Conseiller();
		conseiller.setId(4);
		conseiller.setMatricule("685B");
		conseiller.setNom("Jean");
		conseiller.setPrenom("Dupont");
		conseiller.setEmail("jean@email.com");
		gestionConseillers.createConseiller(conseiller);
		
		List<Conseiller> conseillers = gestionConseillers.getAll();
		for(Conseiller c : conseillers){
			System.out.println(c.toString());
		}
		
	}

}
// 13/02/2018 Test ok