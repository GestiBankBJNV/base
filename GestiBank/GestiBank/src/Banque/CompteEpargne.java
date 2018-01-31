package Banque;

import java.sql.Date;

public class CompteEpargne extends Compte {
	private double taux;

	@Override
	public void retirer(double mt) {
		/*--ici pas de découvert
		--Retrait possible que si montant inferieur au solde---*/
		if(mt>solde) throw new RuntimeException("solde insuffisant");
		Retrait r=new Retrait(operations.size()+1, new Date(code), mt);
		operations.add(r);
		solde=solde-mt;
		
	}

	@Override
	public void updateSolde() {
		//Mise à jour du solde car il y a un taux d'interêt
		solde=solde*(1+taux/100); //ou solde=solde+(solde*taux/100);
		
	}

	
	public CompteEpargne() {
		super();
	}

	public CompteEpargne(int code, double solde, double taux) {
		super(code, solde);
		this.taux = taux;
	}
	
	

}
