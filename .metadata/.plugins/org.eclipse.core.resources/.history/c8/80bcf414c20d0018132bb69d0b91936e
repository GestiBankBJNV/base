package com.gk.gestibank.test.dao.conseiller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.gk.gestibank.dao.impl.ConseillerDaoImpl;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.conseiller.GestionnaireConseiller;

public class GestionnaireConseillerTestCreate {

	public static void main(String[] args) {		
				
		ApplicationContext context = new FileSystemXmlApplicationContext("C:/Users/Jeanne/Documents/GitHub/base/GestiBankBrijanavi/resources/beans.xml");
		GestionnaireConseiller gestionConseillers = (GestionnaireConseiller) context.getBean("GestionnaireConseiller");
		
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
// 09/02/2018 Test ok