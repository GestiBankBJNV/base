package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.stereotype.Component;

@Entity
public class CompteEpargne extends Compte implements Serializable{
	

	private float taux;
	
	public CompteEpargne() {
	}

	public CompteEpargne(int code, double solde, List<Operation> operations,
			double decouvert, float taux) {
		super(code, solde, operations, decouvert);
		this.taux = taux;
		this.setType("account_type_saving");
	}

	public float getTaux() {
		return taux;
	}

	public void setTaux(float taux) {
		this.taux = taux;
	}

	@Override
	public String toString() {
		return "CompteEpargne [getTaux()=" + getTaux() + ", getCode()="
				+ getCode() + ", getSolde()=" + getSolde()
				+ ", getOperations()=" + getOperations() + ", getDecouvert()="
				+ getDecouvert() + "]";
	}
}
