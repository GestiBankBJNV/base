package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.List;
import java.util.Set;







import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Entity
public class Compte implements Serializable {
	@Id
	private int code;
	private double solde;
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="compte")
	private List<Operation> operations;
	private double decouvert;
	private String type;

	public Compte() {
	}

	public Compte(int code, double solde, List<Operation> operations,
			double decouvert) {
		super();
		this.code = code;
		this.solde = solde;
		this.operations = operations;
		this.decouvert = decouvert;
		this.type = "account_type_current";
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

	public List<Operation> getOperations() {
		return operations;
	}

	public void setOperations(List<Operation> operations) {
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
