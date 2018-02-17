package com.gk.gestibank.model;
import java.util.Date;

public class DemandeInscription {

	private int id;
	private Client coordonnees;
	private Date dateInscription;
	private Date dateAffectation;
	private String statut;
	// inutile...
	//private String libelle;
	
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
		//this.libelle = libelle;
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

//	public String getLibelle() {
//		return libelle;
//	}
//
//	public void setLibelle(String libelle) {
//		this.libelle = libelle;
//	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DemandeInscription other = (DemandeInscription) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "DemandeInscription [id=" + id + ", coordonnees=" + coordonnees
				+ ", dateInscription=" + dateInscription + ", dateAffectation="
				+ dateAffectation + ", statut=" + statut + "]";
	}

}
