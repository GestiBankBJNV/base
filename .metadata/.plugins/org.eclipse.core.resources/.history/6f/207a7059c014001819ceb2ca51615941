package com.gk.gestibank.model;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class DemandeModif extends DemandeClient {

	private Client coordonnees;
	
	public DemandeModif() {
	}

	public DemandeModif(int id, Date date, Date dateAffectation, String statut,
			String libelle, Client coordonnees) {
		super(id, date, dateAffectation, statut, libelle);
		this.coordonnees = coordonnees;
	}

	public Client getCoordonnees() {
		return coordonnees;
	}

	public void setCoordonnees(Client coordonnees) {
		this.coordonnees = coordonnees;
	}

	@Override
	public String toString() {
		return "DemandeModif [getCoordonnees()=" + getCoordonnees()
				+ ", getId()=" + getId() + ", getDate()=" + getDate()
				+ ", getDateAffectation()=" + getDateAffectation()
				+ ", getStatut()=" + getStatut() + ", getLibelle()="
				+ getLibelle() + "]";
	}
}
