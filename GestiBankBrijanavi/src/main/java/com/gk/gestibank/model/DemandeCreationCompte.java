package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;

import org.springframework.stereotype.Component;

@Entity
public class DemandeCreationCompte extends DemandeClient implements Serializable {

	private String type;
	
	public DemandeCreationCompte() {
	}

	public DemandeCreationCompte(int id, Date date, Date dateAffectation,
			String statut, String libelle, String type) {
		super(id, date, dateAffectation, statut, libelle);
		this.type = type;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "DemandeCreationCompte [getType()=" + getType() + ", getId()="
				+ getId() + ", getDate()=" + getDate()
				+ ", getDateAffectation()=" + getDateAffectation()
				+ ", getStatut()=" + getStatut() + ", getLibelle()="
				+ getLibelle() + "]";
	}
}
