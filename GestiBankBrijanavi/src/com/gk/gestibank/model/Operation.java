package com.gk.gestibank.model;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Operation {

	@Id
	@GeneratedValue
	private int numero;
	private Date dateOperation;
	private double montant;
	private String type;
	
	public Operation() {
	}

	public Operation(int numero, Date dateOperation, double montant, String type) {
		super();
		this.numero = numero;
		this.dateOperation = dateOperation;
		this.montant = montant;
		this.type = type;
	}

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

	public void setMontant(double montant) {
		this.montant = montant;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Operation [numero=" + numero + ", dateOperation="
				+ dateOperation + ", montant=" + montant + ", type=" + type
				+ "]";
	}
}
