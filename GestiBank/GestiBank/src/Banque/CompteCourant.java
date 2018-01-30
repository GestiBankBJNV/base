package Banque;

import java.sql.Date;

public class CompteCourant extends Compte{
	private double decouvert;

	//implementation des m�thodes de la class Compte
	@Override
	public void retirer(double mt) {
		//mt>solde+decouvert: si solde=0 le retrait est possible tq mt<decouvert
		if(mt>solde+decouvert) throw new RuntimeException("solde insuffisant");
		/*sinon le solde n'est pas insuffissant on effectue le retrait
		--Retrait(numero, date et montant de l'op�ration)*/
		Retrait r=new Retrait(operations.size()+1, new Date(code), mt);
		//ajout � la liste des op�rations 
		operations.add(r);
		//Mise � jour du solde
		solde=solde-mt;
	}

	@Override
	public void updateSolde() {
		//Ne change rien , Pas de taux d'interet alors m�thode vide	
	}

	public CompteCourant() {
		super();
	}
	
	//Pour cr�er un compteCourant on a besion u code, solde, decouvert
	public CompteCourant(int code, double solde, double decouvert) {
		super(code, solde);
		this.decouvert = decouvert;
	}

	
	
	



}
