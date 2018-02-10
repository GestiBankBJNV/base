package com.gk.gestibank.test.conseiller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.gk.gestibank.dao.impl.ConseillerDaoImpl;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.conseiller.ConseillerService;

public class ConseillerServiceTestDelete {

	public static void main(String[] args) {		
				
		ApplicationContext context = new FileSystemXmlApplicationContext("C:/Users/Jeanne/Documents/GitHub/base/GestiBankBrijanavi/resources/beans.xml");
		ConseillerService gestionConseillers = (ConseillerService) context.getBean("conseillerService");
		
		gestionConseillers.deleteConseiller("425A");
		
		List<Conseiller> conseillers = gestionConseillers.getAll();
		for(Conseiller c : conseillers){
			System.out.println(c.toString());
		}
		
	}

}
// 10/02/2018 Test ok