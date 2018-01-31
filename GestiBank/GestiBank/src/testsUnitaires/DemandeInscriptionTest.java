package testsUnitaires;

import java.util.List;

import Banque.Compte;
import Banque.CompteCourant;
import Banque.CompteEpargne;
import Banque.Inscription;
import Banque.Operation;
import Banque.Personne;
import Banque.SuperAdmin;

public class DemandeInscriptionTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//On souhaite tester l'inscription et l'ajout dans la liste de l'admin
		
		//Création d'1 person 
		
		Personne pers = new Personne();
		
		pers .setNom("Dupont");
		pers.setEmail("dupont@gmail");


	//Creation d'une demande
		Inscription insc = new Inscription(pers);
		
		//ajout de la demande pour l'admin 
		SuperAdmin admin = new SuperAdmin();
		System.out.println("l'admin est : " + admin);
		
		admin.addInscription(insc);
	//impossible de mettre le meme onjet dans la liste
		
		
		
		admin.addInscription(insc);
		
		
		
		System.out.println("nb de demandes On reste a 1 ? " + admin.getInscriptions().size());
		
		

		//Creation d'une demande
			Inscription insc2 = new Inscription(pers);
		insc2.setNumeroDemande(100);
	
		admin.addInscription(insc2);

		System.out.println("nb de demandes On doit avoir 2 ? " + admin.getInscriptions().size());
		
		System.out.println("l'admin est : " + admin);
		
		//verif affichage de la liste des demandes
		
		System.out.println("***** liste des inscriptions *******");
		for (Inscription inscription  : admin.getInscriptions()) {
			
			
			System.out.println(inscription);
			System.out.println("quelle personne pour cette inscription " + inscription.getPersonne());
			
		}
		
		
		/*----Test de création des comptes, réalisation des opérations------*/
		
		try {
			
			//Compte a en parametre code, solde, decouvert
			Compte cp1=new CompteCourant(1, 8000, 5000);
			Compte cp2=new CompteEpargne(2, 30000, 5.5);
			
			cp1.verser(50000);
			cp1.retirer(3000);
			//On débite le compte cp1 pour créditer le compte cp2
			cp1.virement(400, cp2);
			
			cp1.verser(4000);
			cp1.retirer(7000);
			
			
			
			System.out.println("Solde du compte cp1="+cp1.consulterSolde());
			System.out.println("Solde du compte cp2="+cp2.consulterSolde());
			
			System.out.println("---------------------------------");
			
			
			System.out.println("Total des versements du compte cp1="+cp1.totalVersements());
			System.out.println("Total des retraits du compte cp1="+cp1.totalRetraits());
			
			//Consulter la liste des opérations 
			List<Operation> LisOperations=cp1.getOperations();
				for(Operation o:LisOperations) {
					System.out.println(o.getClass().getSimpleName()+"---"+o.getNumero()+"--"+o.getDateOperation()+"--"+o.getMontant());
				}
				
			
				
				System.out.println("Mettre à jour le solde");
				cp1.updateSolde();
				cp2.updateSolde();
				System.out.println("Solde du compte cp1="+cp1.consulterSolde()); //reste identique
				System.out.println("Solde du compte cp2="+cp2.consulterSolde());//change car interet pris en compte
				
			
				//Try catch sur tout l'appli pour gérer l'excétion en cas de retrait trop important
					cp1.retirer(8000000);
				
				
			}
			catch(Exception e) {
				System.out.println(e.getMessage());
						
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	}

}
