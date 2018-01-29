package Banque;

import java.util.Date;


public class Operation {
	public int numero;
	public Date dateOperation;
	public double montant;

	//Constructeur
	public Operation() {
		super();
		
	}
	
	public Operation(int numero, Date dateOperation, double montant) {
		super();
		this.numero = numero;
		this.dateOperation = dateOperation;
		this.montant = montant;
	}
	
	//Getters et Setters
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}

	public Date getDateOperation() {
		return dateOperation;
	}
	public void setDateOperation(Date dateOperation) {
		this.dateOperation = dateOperation;
	}

	public double getMontant() {
		return montant;
	}


}