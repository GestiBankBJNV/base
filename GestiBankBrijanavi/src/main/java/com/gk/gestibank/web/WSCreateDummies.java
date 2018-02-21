package com.gk.gestibank.web;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.model.Operation;
import com.gk.gestibank.services.impl.ClientService;

@RestController
@Path("/dummies")
public class WSCreateDummies {

	@Autowired
	ClientService clientService;


	/**
	 * Creer un client al�atoire dans la BDD, avec une liste de comptes, d'op�rations, et de notifications
	 */
	@GET
	@Path("/client/{count}")
	@Produces(MediaType.TEXT_PLAIN)
	public String createDummyClient(@PathParam("count") int count){
		//
		System.out.println("Cr�ation de " + count + "clients al�atoires.");
		
		for (int i = 0; i < count; i++)
		{
			//Cr�ation du dummy
			Client client = dummyClient();
			
			//persistence dans la BDD
			clientService.createClient(client);

			//
			System.out.println("Le client " + client.toString() + " a �t� cr��");
		}
		
		return "Created " + count + " dummy clients";
	}

	//Cr�er un compte courant al�atoire
	Compte createRandomCompteCourant(){
		Compte c = new Compte();
		c.setCode((int)(Math.random() * (new Date().hashCode())));
		c.setSolde(Math.random() * 5000d);
		c.setDecouvert(c.getSolde() * 0.1d);			
		c.setType("account_type_current");
		List<Operation> operations = new ArrayList<Operation>();
		for (int i=0; i < 30; i++){
			operations.add(createRandomOperation());
		}
		c.setOperations(operations);
		return c;
	}

	//Cr�er un compte �pargne al�atoire
	CompteEpargne createRandomCompteEpargne(){
		CompteEpargne c = new CompteEpargne();
		c.setCode((int)(Math.random() * (new Date().hashCode())));
		c.setSolde(Math.random() * 5000d);
		c.setDecouvert(c.getSolde() * 0.1d);
		c.setTaux(1.5f);			
		c.setType("account_type_saving");
		List<Operation> operations = new ArrayList<Operation>();
		for (int i=0; i < 30; i++){
			operations.add(createRandomOperation());
		}
		c.setOperations(operations);
		return c;
	}

	//Cr�er une op�ration bancaire al�atoire
	Operation createRandomOperation(){
		Operation op = new Operation();	
		op.setDateOperation(new Date());
		op.setMontant(10d + (int)(Math.random() * 100d));
		op.setNumero((int)(Math.random() * (new Date().hashCode())));
		if (Math.random() > 0.3d){
			op.setLibelle("Cr�dit");
			op.setType("operation_type_credit");
		}
		else{
			op.setLibelle("D�bit");
			op.setType("operation_type_debit");
		}		
		return op;
	}

	//cr�er une demande client al�atoire
	DemandeClient createRandomDemandeClient(){
		DemandeClient dc = new DemandeClient();
		dc.setDate(new Date());
		dc.setDateAffectation(null);
		dc.setLibelle("Demande al�atoire");
		dc.setStatut("En cours");
		return dc;
	}

	//cr�er une notification al�atoire
	Notification createRandomNotification(){
		Notification n = new Notification(new Date(), "Notification al�atoire", "info", (Math.random() > 0.4d));
		return n;
	}

	//R�cup�rer un pr�nom al�atoire
	private static String[] prenoms = {"Gaspard", "Balthazar", "Melchior", "Bertrand", "Thierry", "Richard"};
	String getPrenom(){
		return prenoms[(int)(Math.random() * (prenoms.length - 1))];
	}
	//Nom al�atoire
	private static String[] noms = {"Lucas", "Dupont", "Sanchez", "Michel", "Durand", "Dubois"};
	String getNom(){
		return noms[(int)(Math.random() * (noms.length - 1))];
	}

	private Client dummyClient(){
		//liste de comptes
		List<Compte> comptes = new ArrayList<Compte>();
		comptes.add(createRandomCompteCourant());
		comptes.add(createRandomCompteCourant());
		comptes.add(createRandomCompteEpargne());

		//Liste de demandes
		List<DemandeClient> demandes = new ArrayList<DemandeClient>();
		demandes.add(createRandomDemandeClient());
		demandes.add(createRandomDemandeClient());
		demandes.add(createRandomDemandeClient());

		//Liste de notifications
		List<Notification> notifications = new ArrayList<Notification>();
		notifications.add(createRandomNotification());
		notifications.add(createRandomNotification());
		notifications.add(createRandomNotification());
		notifications.add(createRandomNotification());
		notifications.add(createRandomNotification());
		notifications.add(createRandomNotification());

		//Cr�ation du client
		Client client = new Client((int)(Math.random() * 5), ((Math.random() > 0.5)? "Mari�" : "C�libataire"), comptes, "10 Rue de Menin", "Lille","59000", demandes, notifications);

		//Assignation du prenom
		String prenom = getPrenom();		
		client.setPrenom(prenom);

		//Assignation du nom
		String nom = getNom();
		client.setNom(nom);

		//Username � partir du nom et du pr�nom
		String username = prenom.charAt(0) + nom;
		String num = "" + new Date().getTime();
		num = num.substring(num.length() - 4);
		username = username.toLowerCase() + num;
		client.setNomUtilisateur(username);

		//Statut de client
		client.setStatut("client");

		//Num�ro de t�l
		client.setNumTel("0606060606");

		//mot de passe
		client.setPassword("azerty");

		//Mail
		client.setEmail(prenom.toLowerCase() + "." + nom.toLowerCase() + "@gestibank.com");
		return client;
	}
}
