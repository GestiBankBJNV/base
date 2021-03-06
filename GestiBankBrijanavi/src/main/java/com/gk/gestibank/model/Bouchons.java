package com.gk.gestibank.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

public class Bouchons implements Serializable{

	private ArrayList<Conseiller> conseillers = new ArrayList<Conseiller>();
	private List<Client> clients = new ArrayList<Client>();
	private List<DemandeInscription> demInscriptions = new ArrayList<DemandeInscription>();
	
	public Bouchons() {
		// Clients
		List<DemandeClient> demandes = new ArrayList<DemandeClient>();
		
		// Demande de client.
		DemandeClient demande = new DemandeClient();
		
		demande.setDate(new Date());
		demande.setDateAffectation(new Date());
		demande.setId(1);
		demande.setLibelle("Chequier");
		demande.setStatut("en cours");
		
		demandes.add(demande) ;
		
		Client cl = new Client();
		cl.setNom("Hautefeuille");
		cl.setPrenom("Annie");
		cl.setEmail("annie@email.com");
		cl.setId(0);
		cl.setDemandes(demandes);
		
		Client cl4 = new Client();
		cl4.setNom("Rucci");
		cl4.setPrenom("Monique");
		cl4.setEmail("monique@email.com");
		cl4.setId(4);
		cl4.setDemandes(new ArrayList<DemandeClient>());
		
		clients.add(cl);		
		clients.add(cl4);		
		
		// Conseillers
		Conseiller c1 = new Conseiller(1, "Jeanne", "Grelier", "Jaja", "1234", 
				"j@email.com", "0658654236", "conseiller", 
				"425A", new Date(), clients, 
				new ArrayList<DemandeInscription>());
		Conseiller c2 = new Conseiller(2, "JD", "Eymann", "Jdeon", "1234", 
				"jd@email.com", "0657894236", "conseiller", 
				"426A", new Date(), new ArrayList<Client>(), 
				new ArrayList<DemandeInscription>());
		Conseiller c3 = new Conseiller(3, "M�lanie", "Desvaux", "M�l", "1234", 
				"jo@email.com", "0658656546", "conseiller", 
				"427A", new Date(), new ArrayList<Client>(), 
				new ArrayList<DemandeInscription>());
		
		conseillers.add(c1);
		conseillers.add(c2);
		conseillers.add(c3);		
		
		// Demandes d'inscription
		Client cl1 = new Client();
		cl1.setNom("Dupont");
		cl1.setPrenom("Robert");
		
		Client cl2 = new Client();
		cl2.setNom("Lombard");
		cl2.setPrenom("J�r�me");
		
		Client cl3 = new Client();
		cl3.setNom("Aur�lie");
		cl3.setPrenom("Jaudoin");
		
		Calendar cal1 = new GregorianCalendar(2017, 11, 23);
		Date date1 = cal1.getTime();
		
		Calendar cal2 = new GregorianCalendar(2018, 1, 3);
		Date date2 = cal2.getTime();
		
		Calendar cal3 = new GregorianCalendar(2018, 0, 18);
		Date date3 = cal3.getTime();
		
		Calendar cal4 = new GregorianCalendar(2018, 1, 5);
		Date date4 = cal4.getTime();
		
		DemandeInscription d1 = new DemandeInscription();
		d1.setCoordonnees(cl1);
		d1.setDateInscription(date1);
		d1.setId(1);
		d1.setStatut("non affect�e");
		
		DemandeInscription d2 = new DemandeInscription();
		d2.setCoordonnees(cl2);
		d2.setDateInscription(date2);
		d2.setId(2);
		d2.setStatut("non affect�e");
		
		DemandeInscription d3 = new DemandeInscription();
		d3.setCoordonnees(cl3);
		d3.setDateInscription(date3);
		d3.setDateAffectation(date4);
		d3.setStatut("trait�e");
		d3.setId(3);
		
		demInscriptions.add(d1);
		demInscriptions.add(d2);
		demInscriptions.add(d3);
		
	}

	public ArrayList<Conseiller> getConseillers() {
		return conseillers;
	}

	public List<Client> getClients() {
		return clients;
	}

	public List<DemandeInscription> getDemInscriptions() {
		return demInscriptions;
	}
	

}
