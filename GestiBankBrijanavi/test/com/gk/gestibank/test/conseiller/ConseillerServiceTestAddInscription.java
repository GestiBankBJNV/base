package com.gk.gestibank.test.conseiller;

import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.impl.ConseillerService;

public class ConseillerServiceTestAddInscription {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ConseillerService service = (ConseillerService) context.getBean("conseillerService");
		
		System.out.println(service.getConseillerByNameOrMatricule("427A"));
		
		DemandeInscription inscription = new DemandeInscription();
		inscription.setId(10);
		inscription.setDateInscription(new Date());
		service.addInscriptionToConseiller(inscription, "427A");;
		
		System.out.println(service.getConseillerByNameOrMatricule("427A"));

	}

}
// 13/02/2018 Test ok