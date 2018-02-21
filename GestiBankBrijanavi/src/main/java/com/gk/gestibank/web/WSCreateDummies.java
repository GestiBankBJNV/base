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
	 * Creer un client aléatoire dans la BDD, avec une liste de comptes, d'opérations, et de notifications
	 */
	@GET
	@Path("/client/{count}")
	@Produces(MediaType.TEXT_PLAIN)
	public String createDummyClient(@PathParam("count") int count){
		//
		System.out.println("Création de " + count + "clients aléatoires.");
		
		for (int i = 0; i < count; i++)
		{
			//Création du dummy
			Client client = dummyClient();
			
			//persistence dans la BDD
			clientService.createClient(client);

			//
			System.out.println("Le client " + client.toString() + " a été créé");
		}
		
		return "Created " + count + " dummy clients";
	}

	//Créer un compte courant aléatoire
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

	//Créer un compte épargne aléatoire
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

	//Créer une opération bancaire aléatoire
	Operation createRandomOperation(){
		Operation op = new Operation();	
		op.setDateOperation(new Date());
		op.setMontant(10d + (int)(Math.random() * 100d));
		op.setNumero((int)(Math.random() * (new Date().hashCode())));
		if (Math.random() > 0.3d){
			op.setLibelle("Crédit");
			op.setType("operation_type_credit");
		}
		else{
			op.setLibelle("Débit");
			op.setType("operation_type_debit");
		}		
		return op;
	}

	//créer une demande client aléatoire
	DemandeClient createRandomDemandeClient(){
		DemandeClient dc = new DemandeClient();
		dc.setDate(new Date());
		dc.setDateAffectation(null);
		dc.setLibelle("Demande aléatoire");
		dc.setStatut("En cours");
		return dc;
	}

	//créer une notification aléatoire
	Notification createRandomNotification(){
		Notification n = new Notification(new Date(), "Notification aléatoire", "info", (Math.random() > 0.4d));
		return n;
	}

	//Récupérer un prénom aléatoire
	private static String[] prenoms = {"Gaspard", "Balthazar", "Melchior", "Bertrand", "Thierry", "Richard"};
	String getPrenom(){
		return prenoms[(int)(Math.random() * (prenoms.length - 1))];
	}
	//Nom aléatoire
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

		//Création du client
		Client client = new Client((int)(Math.random() * 5), ((Math.random() > 0.5)? "Marié" : "Célibataire"), comptes, "10 Rue de Menin", "Lille","59000", demandes, notifications);

		//Assignation du prenom
		String prenom = getPrenom();		
		client.setPrenom(prenom);

		//Assignation du nom
		String nom = getNom();
		client.setNom(nom);

		//Username à partir du nom et du prénom
		String username = prenom.charAt(0) + nom;
		String num = "" + new Date().getTime();
		num = num.substring(num.length() - 4);
		username = username.toLowerCase() + num;
		client.setNomUtilisateur(username);

		//Statut de client
		client.setStatut("client");

		//Numéro de tél
		client.setNumTel("0606060606");

		//mot de passe
		client.setPassword("azerty");

		//Mail
		client.setEmail(prenom.toLowerCase() + "." + nom.toLowerCase() + "@gestibank.com");
		return client;
	}
}
