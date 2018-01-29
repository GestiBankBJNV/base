package Banque;
import java.util.*;


public class Conseiller extends Personne {
	 private int matricule;
	 private Date dateDebutContrat;
	 private Set<Client> listeClients;
	 private Set<Demande> demandes;


  
    public Conseiller() {
    }

    
   

    public int getMatricule() {
		return matricule;
	}
	public void setMatricule(int matricule) {
		this.matricule = matricule;
	}
	public Date getDateDebutContrat() {
		return dateDebutContrat;
	}
	public void setDateDebutContrat(Date dateDebutContrat) {
		this.dateDebutContrat = dateDebutContrat;
	}
	public Set<Client> getListeClients() {
		return listeClients;
	}
	public void setListeClients(Set<Client> listeClients) {
		this.listeClients = listeClients;
	}

	public Set<Demande> getDemandes() {
		return demandes;
	}

	public void setDemandes(Set<Demande> demandes) {
		this.demandes = demandes;
	}
	
	public void consulter(Compte compte) {
        // TODO implement here
    }

    /**
     * 
     */
    public void validerDemande() {
        // TODO implement here
    }

}