package Banque;
import java.util.*;

/**
 * 
 */
public class SuperAdmin extends Personne {

    private Set<Conseiller> conseillers;
    private Set<Inscription> inscriptions;
    //public Conseiller gère;
    
    public SuperAdmin() {
    	
    	conseillers = new HashSet<Conseiller>();
    	inscriptions = new HashSet();
    }

    public void addInscription(Inscription inscript){
	getInscriptions().add(inscript);
    }

    public void creerConseiller() {
        // TODO implement here
    }

   
    public void affecterInscription(Conseiller agent, Inscription inscription) {
        // TODO implement here
    }

    
    public void affecterClient(Conseiller conseiller, Client client) {
        // TODO implement here
    }

   
    public void supprimerConseiller(Conseiller conseiller) {
        // TODO implement here
    }

	/**
	 * @return the conseillers
	 */
	public Set<Conseiller> getConseillers() {
		return conseillers;
	}

	/**
	 * @param conseillers the conseillers to set
	 */
	public void setConseillers(Set<Conseiller> conseillers) {
		this.conseillers = conseillers;
	}

	/**
	 * @return the inscriptions
	 */
	public Set<Inscription> getInscriptions() {
		return inscriptions;
	}

	/**
	 * @param inscriptions the inscriptions to set
	 */
	public void setInscriptions(Set<Inscription> inscriptions) {
		this.inscriptions = inscriptions;
	}

	/* (non-Javadoc)
	 * @see banque.Personne#toString()
	 */
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Admin ayant " + getInscriptions().size() + " demandes en liste " + super.toString();
	}

}