package Banque;

import java.sql.Date;

public class CompteCourant extends Compte{
	private double decouvert;

	//implementation des méthodes de la class Compte
	@Override
	public void retirer(double mt) {
		//mt>solde+decouvert: si solde=0 le retrait est possible tq mt<decouvert
		if(mt>solde+decouvert) throw new RuntimeException("solde insuffisant");
		/*sinon le solde n'est pas insuffissant on effectue le retrait
		--Retrait(numero, date et montant de l'opération)*/
		Retrait r=new Retrait(operations.size()+1, new Date(code), mt);
		//ajout à la liste des opérations 
		operations.add(r);
		//Mise à jour du solde
		solde=solde-mt;
	}

	@Override
	public void updateSolde() {
		//Ne change rien , Pas de taux d'interet alors méthode vide	
	}

	public CompteCourant() {
		super();
	}
	
	//Pour créer un compteCourant on a besion u code, solde, decouvert
	public CompteCourant(int code, double solde, double decouvert) {
		super(code, solde);
		this.decouvert = decouvert;
	}

	
	
	



}
