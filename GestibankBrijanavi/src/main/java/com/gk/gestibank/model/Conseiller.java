package com.gk.gestibank.model;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;









import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Entity

public class Conseiller extends Utilisateur {

	private String matricule;
	
	@Temporal(TemporalType.DATE)
	private Date dateDebutContrat;

	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="conseiller")
	private List<Client> clients = new ArrayList<Client>();
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.EAGER)
	@JoinColumn(name="conseiller")
	private List<DemandeInscription> demandesInscription = new ArrayList<DemandeInscription>();


	public Conseiller() {
	}

	public Conseiller(int id, String prenom, String nom, String nomUtilisateur,
			String password, String email, String numTel, String statut, String matricule, Date dateDebutContrat,
			List<Client> clients, List<DemandeInscription> demandesInscription) {
		super(id, prenom, nom, nomUtilisateur, password, email, numTel, statut);
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		this.clients = clients;
		this.demandesInscription = demandesInscription;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public Date getDateDebutContrat() {
		return dateDebutContrat;
	}

	public void setDateDebutContrat(Date dateDebutContrat) {
		this.dateDebutContrat = dateDebutContrat;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public List<DemandeInscription> getDemandesInscription() {
		return demandesInscription;
	}

	public void setDemandesInscription(List<DemandeInscription> demandesInscription) {
		this.demandesInscription = demandesInscription;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result
				+ ((matricule == null) ? 0 : matricule.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Conseiller other = (Conseiller) obj;
		if (matricule == null) {
			if (other.matricule != null)
				return false;
		} else if (!matricule.equals(other.matricule))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Conseiller [Matricule : " + getMatricule()
				+ ", DateDebutContrat : " + getDateDebutContrat()
				+ ", Clients : " + getClients()
				+ ", DemandesInscription : " + getDemandesInscription()
				+ ", Id : " + getId() + ", Prenom : " + getPrenom()
				+ ", Nom : " + getNom() + ", NomUtilisateur : "
				+ getNomUtilisateur() + ", Password : " + getPassword()
				+ ", Email : " + getEmail() + ", NumTel : " + getNumTel()
				+ ", Statut : " + getStatut() + "]";
	}
	
}
