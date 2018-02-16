package com.gk.gestibank.model;
import java.util.Set;

import org.springframework.stereotype.Component;

public class CompteEpargne extends Compte {

	private float taux;
	
	public CompteEpargne() {
	}

	public CompteEpargne(int code, double solde, Set<Operation> operations,
			double decouvert, float taux) {
		super(code, solde, operations, decouvert);
		this.taux = taux;
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
