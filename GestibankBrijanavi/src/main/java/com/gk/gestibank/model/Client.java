package com.gk.gestibank.model;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;












import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;













import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
public class Client extends Utilisateur {

	private int nbEnfants;
	private String situationMatrimoniale;	
	private String adresse;
	private String ville;
	private String cp;

	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="client", nullable=false, updatable=true)
	private List<Compte> comptes = new ArrayList<Compte>();

	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name = "client", nullable=false, updatable=true)
	private List<DemandeClient> demandes = new ArrayList<DemandeClient>();

	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="client", nullable=false, updatable=true)
	private List<Notification> notifications = new ArrayList<Notification>();



	public Client() {
	}

	public Client(int nbEnfants, String situationMatrimoniale,
			List<Compte> comptes, String adresse, String ville, String cp,
			List<DemandeClient> demandes, List<Notification> notifications) {
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

	public List<Compte> getComptes() {
		return comptes;
	}

	public void setComptes(List<Compte> comptes) {
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

	public List<DemandeClient> getDemandes() {
		return demandes;
	}

	public void setDemandes(List<DemandeClient> demandes) {
		this.demandes = demandes;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

	public boolean equals(Object obj) {
		return super.equals(obj);
	}

	public void addNotification(Notification notification){
		this.notifications.add(notification);
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
