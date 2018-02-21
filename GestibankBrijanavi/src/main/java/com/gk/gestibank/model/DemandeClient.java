package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;


@Produces("application/json")
@Entity
public class DemandeClient implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateAffectation;
	private String statut;
	private String libelle;
	
	public DemandeClient() {
	}

	public DemandeClient(int id, Date date, Date dateAffectation,
			String statut, String libelle) {
		super();
		this.id = id;
		this.date = date;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
		return "DemandeClient [getId()=" + getId() + ", getDate()=" + getDate()
				+ ", getDateAffectation()=" + getDateAffectation()
				+ ", getStatut()=" + getStatut() + ", getLibelle()="
				+ getLibelle() + "]";
	}

}
