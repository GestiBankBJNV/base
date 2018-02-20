package com.gk.gestibank.model;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

@Entity
@NamedQuery(name="Operation.delete", query="DELETE FROM Operation o WHERE o.numero = :numero")
public class Operation {

	@Id
	private int numero;
	
	private String libelle;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateOperation;
	
	private double montant;
	
	private String type;
	
	public Operation() {
	}

	public Operation(int numero, String libelle,  Date dateOperation, double montant, String type) {
		super();
		this.numero = numero;
		this.libelle = libelle;
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

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	@Override
	public String toString() {
		return "Operation [numero=" + numero + ", dateOperation="
				+ dateOperation + ", montant=" + montant + ", type=" + type
				+ "]";
	}
}
