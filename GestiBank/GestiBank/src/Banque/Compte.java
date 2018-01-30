package Banque;

import java.util.*;

public abstract class Compte {
	//En protected afin de permettre aux class dérivés d'y accéder
    protected int code;
    protected double solde;
    protected List<Operation> operations = new ArrayList<Operation>();


	public Compte() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Compte(int code, double solde) {
		super();
		this.code = code;
		this.solde = solde;
	}

	public void verser(double mt) {
	/*---Je modifie le solde ajout d'une operation de type versement---*/
		
		//2:Garder l'historique des versements
		Versement v=new Versement(operations.size()+1, new Date(), mt);
		
		//3:Ajout versement dans la liste des operations
		operations.add(v);
				
		//1:Verser un montant/changer solde
		solde+=mt;
	}
	
	public abstract void retirer(double mt);
	
	//Pour effectuer un virement, on spécificie le montant et le compte à créditer
	public void virement(double mt, Compte cp2) {
		//appel de la méthode retirer montant (mt)
		retirer(mt);
		//Versement vers cp2
		cp2.verser(mt);
	}
	
	//Méthode consulter solde
	public double consulterSolde() {
		return solde;
	}
	
	//Méthode pour mettre à jour le solde
	public abstract void updateSolde();
	 
	//Consulter et retourner les opérations
	public List<Operation> getOperations() {
		return operations;
	}
	
	/*--total versement ---*/
	public double totalVersements() {
		double somme=0;
		//Parcourrir la liste des opérations
		for(Operation o:operations) {
			/*2:Test pour savoir si les opérations sont des versements ou retraits
			 --si o est une instance de versement on exécute le calcul de la somme
			--Sans le if(o instanceof Versement):la somme serait égal aux versement + les retraits*/
			if(o instanceof Versement)
			
				//1:calcul somme des operations de versement uniquement 
				somme=somme+o.getMontant();
		}
		return somme;
	}
	
	/*--total versement---*/
	public double totalRetraits() {
		double somme=0;
		for(Operation o:operations) {
			if(o instanceof Retrait)
				//si on a des Retraits on fait la somme
				somme=somme+o.getMontant();
		}
		return somme;
	}
	
	
	
}