package Banque;
import java.util.*;

/**
 * 
 */
public class Inscription extends Demande {

	 private Personne personne;
	

    public Inscription(Personne person) {
    	super();
    	personne = person; 
    	super.setLibelle("demande d'inscription");
    }


	/**
	 * @return the personne
	 */
	public Personne getPersonne() {
		return personne;
	}


	/**
	 * @param personne the personne to set
	 */
	public void setPersonne(Personne personne) {
		this.personne = personne;
	}




}