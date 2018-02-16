package com.gk.gestibank.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.UniqueConstraint;

import org.springframework.stereotype.Component;

@Entity
public class Utilisateur {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String prenom;
	private String nom;
	@Column(unique=true)
	private String nomUtilisateur;
	private String password;
	private String email;
	private String numTel;
	private String statut;
	
	public Utilisateur() {
		super();
	}
	
	public Utilisateur(int id, String prenom, String nom,
			String nomUtilisateur, String password, String email,
			String numTel, String statut) {
		super();
		this.id = id;
		this.prenom = prenom;
		this.nom = nom;
		this.nomUtilisateur = nomUtilisateur;
		this.password = password;
		this.email = email;
		this.numTel = numTel;
		this.statut = statut;
	}	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getNomUtilisateur() {
		return nomUtilisateur;
	}

	public void setNomUtilisateur(String nomUtilisateur) {
		this.nomUtilisateur = nomUtilisateur;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

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
		Utilisateur other = (Utilisateur) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Utilisateur [id=" + id + ", prenom=" + prenom + ", nom=" + nom
				+ ", nomUtilisateur=" + nomUtilisateur + ", password="
				+ password + ", email=" + email + ", numTel=" + numTel
				+ ", statut=" + statut + "]";
	}
		
}
