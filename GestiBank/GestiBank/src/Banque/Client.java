package Banque;
import java.util.*;


public class Client extends Personne {

    private int nbEnfants;
    private String situationMatrimoniale;
    private Set<Compte> comptes;

    public Client() {
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




	public void sinscrire(String login, String mdp) {
        // TODO implement here
    }

    
    public void changerMdp(String mdp) {
        // TODO implement here
    }

    public void visualiserCompte() {
        // TODO implement here
    }

}