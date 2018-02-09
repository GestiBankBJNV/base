package com.gk.gestibank.model;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DemandeInscription {

	private int id;
	@Autowired
	private Client coordonnees;
	private Date dateInscription;
	private Date dateAffectation;
	private String statut;
	private String libelle;
	
	public DemandeInscription() {
	}

	public DemandeInscription(int id, Client coordonnees, Date dateInscription,
			Date dateAffectation, String statut, String libelle) {
		super();
		this.id = id;
		this.coordonnees = coordonnees;
		this.dateInscription = dateInscription;
		this.dateAffectation = dateAffectation;
		this.statut = statut;
		this.libelle = libelle;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Client getCoordonnees() {
		return coordonnees;
	}

	public void setCoordonnees(Client coordonnees) {
		this.coordonnees = coordonnees;
	}

	public Date getDateInscription() {
		return dateInscription;
	}

	public void setDateInscription(Date dateInscription) {
		this.dateInscription = dateInscription;
	}

	public Date getDateAffectation() {
		return dateAffectation;
	}

	public void setDateAffectation(Date dateAffectation) {
		this.dateAffectation = dateAffectation;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	@Override
	public String toString() {
		return "DemandeInscription [id=" + id + ", coordonnees=" + coordonnees
				+ ", dateInscription=" + dateInscription + ", dateAffectation="
				+ dateAffectation + ", statut=" + statut + ", libelle="
				+ libelle + "]";
	}

}
