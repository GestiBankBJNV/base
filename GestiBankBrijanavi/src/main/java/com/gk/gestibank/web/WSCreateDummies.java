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
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.Notification;
import com.gk.gestibank.model.Operation;
import com.gk.gestibank.services.IClientService;

import com.gk.gestibank.services.IConseillerService;


@RestController
@Path("/dummies")
public class WSCreateDummies {

	@Autowired
	IClientService clientService;

	@Autowired
	IConseillerService conseillerService;



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

			try {
				//Création du dummy
				Client client = dummyClient();

				//persistence dans la BDD
				clientService.createClient(client);

				//
				System.out.println("Le client " + client.toString() + " a été créé");
			} catch (Exception e) {

			}
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
		String code = "" + new Date().getTime();
		code = code.substring(code.length() - 7);
		c.setCode(Integer.valueOf(code));
		c.setSolde(Math.random() * 5000d);
		c.setDecouvert(0d);
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
	private static String[] prenoms = {"Jean", "Philippe", "Michel", "Alain", "Patrick", "Nicolas", "Christophe", "Pierre", "Christian", "Éric", "Marie", "Nathalie", "Isabelle", "Sylvie", "Catherine", "Martine", "Christine", "Françoise", "Valérie", "Sandrine"};
	String getPrenom(){
		return prenoms[(int)(Math.random() * (prenoms.length - 1))];
	}

	//Nom aléatoire
	private static String[] noms = {"Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lefebvre", "Leroy", "Roux"};
	String getNom(){
		return noms[(int)(Math.random() * (noms.length - 1))];
	}

	private Client dummyClient(){
		//liste de comptes
		List<Compte> comptes = new ArrayList<Compte>();
		comptes.add(createRandomCompteCourant());
		comptes.add(createRandomCompteCourant());
		//comptes.add(createRandomCompteEpargne());

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
		Client client = new Client();

		//isClient
		client.setIsClient(false);

		//Notifications
		client.setNotifications(notifications);

		//Demandes
		client.setDemandes(demandes);

		//Code postal
		client.setCp("59000");

		//Ville
		client.setVille("Lille");

		//Adresse
		client.setAdresse((int)(1 + (Math.random() * 100)) + " Rue " + getNom());

		//Comptes
		client.setComptes(comptes);


		//Situation matrimoniale
		client.setSituationMatrimoniale(((Math.random() > 0.5) ? "Marié" : "Célibataire"));

		//Nb enfants
		client.setNbEnfants((int)(Math.random() * 5));

		//Prenom
		String prenom = getPrenom();		
		client.setPrenom(prenom);

		//Nom
		String nom = getNom();
		client.setNom(nom);

		//Username à partir du nom et du prénom
		String username = prenom.charAt(0) + nom;
		String num = "" + new Date().getTime();
		num = num.substring(num.length() - 5);
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

	Conseiller dummyConseiller(){
		Conseiller conseiller = new Conseiller();

		//Liste client
		conseiller.setClients(new ArrayList<Client>());

		//Date début contrat
		conseiller.setDateDebutContrat(new Date());

		//Demandes inscriptions
		conseiller.setDemandesInscription(new ArrayList<DemandeInscription>());

		//Prenom
		String prenom = getPrenom();		
		conseiller.setPrenom(prenom);

		//Nom
		String nom = getNom();
		conseiller.setNom(nom);

		//Username à partir du nom et du prénom
		String username = prenom.charAt(0) + nom;
		String num = "" + new Date().getTime();
		num = num.substring(num.length() - 5);
		username = username.toLowerCase() + num;
		conseiller.setNomUtilisateur(username);

		//Mail
		conseiller.setEmail(prenom.toLowerCase() + "." + nom.toLowerCase() + "@gestibank.com");

		//Matricule
		String mat = "" + prenom.charAt(0) + nom.charAt(0);
		mat = mat.toUpperCase();
		num = "" + new Date().getTime();
		num = num.substring(num.length() - 7);
		conseiller.setMatricule(mat + num);

		//Numero téléphone
		conseiller.setNumTel("0606060606");

		//Password
		conseiller.setPassword("azerty");

		//Statut
		conseiller.setStatut("conseiller");	

		return conseiller;
	}


	@GET
	@Path("/conseiller/{count}")
	@Produces(MediaType.TEXT_PLAIN)
	public String createDummyConseiller(@PathParam("count") int count){

		//ADMIN
		Conseiller admin = dummyConseiller();
		admin.setStatut("admin");
		conseillerService.createConseiller(admin);

		//Conseillers

		List<Conseiller> lc = new ArrayList<Conseiller>();

		List<List<Client>> listOfList = new ArrayList<List<Client>>();



		for (int i=0; i < count; i++){
			lc.add(dummyConseiller());
			listOfList.add(new ArrayList<Client>());
		}

		//Distribution des clients aux conseillers (on laisse 10 clients sans conseillers, pour la démo)
		List<Client> lClients = clientService.getAll();
		System.out.println("GETALL : " + lClients.size());
		int token=0;		
		for (int i = 0; i < lClients.size() - 10; i++){

			lClients.get(i).setIsClient(true);
			listOfList.get(token).add(lClients.get(i));

			token++;
			if (token >= count){ token = 0; }
		}
		//assignation des listes aux conseillers
		for (int i=0; i < count; i++){

			try {
				Conseiller cons = lc.get(i);			
				conseillerService.createConseiller(cons);				
				for (Client client :  listOfList.get(i)){
					conseillerService.addClientToConseiller(client, cons.getMatricule());
				}
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}


		return "Created " + count + " dummy Conseiller";
	}
}
