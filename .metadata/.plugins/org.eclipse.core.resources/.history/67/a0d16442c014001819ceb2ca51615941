package com.gk.gestibank.model;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class Compte {
	private int code;
	private double solde;
	private Set<Operation> operations;
	private double decouvert;

	public Compte() {
	}

	public Compte(int code, double solde, Set<Operation> operations,
			double decouvert) {
		super();
		this.code = code;
		this.solde = solde;
		this.operations = operations;
		this.decouvert = decouvert;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public double getSolde() {
		return solde;
	}

	public void setSolde(double solde) {
		this.solde = solde;
	}

	public Set<Operation> getOperations() {
		return operations;
	}

	public void setOperations(Set<Operation> operations) {
		this.operations = operations;
	}

	public double getDecouvert() {
		return decouvert;
	}

	public void setDecouvert(double decouvert) {
		this.decouvert = decouvert;
	}

	@Override
	public String toString() {
		return "Compte [code=" + code + ", solde=" + solde + ", operations="
				+ operations + ", decouvert=" + decouvert + "]";
	}
}
