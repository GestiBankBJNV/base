package com.gk.gestibank.test.conseiller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.gk.gestibank.dao.impl.ConseillerDaoImpl;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.conseiller.ConseillerService;

public class ConseillerServiceTestAddInscription {

	public static void main(String[] args) {		
				
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		ConseillerService service = (ConseillerService) context.getBean("conseillerService");
		
		System.out.println(service.getConseillerByNameOrMatricule("427A"));
		
		DemandeInscription inscription = new DemandeInscription();
		inscription.setId(10);
		inscription.setLibelle("Demande d'inscription");
		inscription.setDateInscription(new Date());
		service.addInscriptionToConseiller(inscription, "427A");;
		
		System.out.println(service.getConseillerByNameOrMatricule("427A"));
		
	}

}
// 11/02/2018 Test ok