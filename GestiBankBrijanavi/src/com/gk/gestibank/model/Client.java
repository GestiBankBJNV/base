package com.gk.gestibank.model;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Client extends Utilisateur {
	
	private int nbEnfants;
	private String situationMatrimoniale;
	@Autowired
	private Set<Compte> comptes;
	private String adresse;
	private String ville;
	private String cp;
	@Autowired
	private Set<DemandeClient> demandes;
	@Autowired
	private Set<Notification> notifications;
	
	public Client() {
	}

	public Client(int nbEnfants, String situationMatrimoniale,
			Set<Compte> comptes, String adresse, String ville, String cp,
			Set<DemandeClient> demandes, Set<Notification> notifications) {
		super();
		this.nbEnfants = nbEnfants;
		this.situationMatrimoniale = situationMatrimoniale;
		this.comptes = comptes;
		this.adresse = adresse;
		this.ville = ville;
		this.cp = cp;
		this.demandes = demandes;
		this.notifications = notifications;
	}

	public int getNbEnfants() {
		return nbEnfants;
	}

	public void setNbEnfants(int nbEnfants) {
		this.nbEnfants = nbEnfants;
	}

	public String getSituationMatrimoniale() {
		return situationMatrimoniale;
	}

	public void setSituationMatrimoniale(String situationMatrimoniale) {
		this.situationMatrimoniale = situationMatrimoniale;
	}

	public Set<Compte> getComptes() {
		return comptes;
	}

	public void setComptes(Set<Compte> comptes) {
		this.comptes = comptes;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public Set<DemandeClient> getDemandes() {
		return demandes;
	}

	public void setDemandes(Set<DemandeClient> demandes) {
		this.demandes = demandes;
	}

	public Set<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(Set<Notification> notifications) {
		this.notifications = notifications;
	}

	@Override
	public String toString() {
		return "Client [Id : " + getId() + ", Prenom : " + getPrenom() + ", Nom : "
				+ getNom() + ", NomUtilisateur : " + getNomUtilisateur()
				+ ", Password : " + getPassword() + ", Email : "
				+ getEmail() + ", NumTel : " + getNumTel()
				+ ", Statut : " + getStatut() + "NbEnfants : " + getNbEnfants()
				+ ", SituationMatrimoniale : " + getSituationMatrimoniale()
				+ ", Comptes : " + getComptes() + ", Adresse : "
				+ getAdresse() + ", Ville : " + getVille() + ", Cp : "
				+ getCp() + ", Demandes : " + getDemandes()
				+ ", Notifications : " + getNotifications() + "]";
	}
}