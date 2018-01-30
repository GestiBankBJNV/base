package Banque;

import java.time.LocalDate;


/**
 * 
 */
public class Demande {
	private int numeroDemande;
    private LocalDate date;
    private String libelle;

   
    public Demande() {
    	numeroDemande = 1;
    	date = LocalDate.now();
    	libelle = "Demande ";
    	}


	/**
	 * @return the numeroDemande
	 */
	public int getNumeroDemande() {
		return numeroDemande;
	}


	/**
	 * @param numeroDemande the numeroDemande to set
	 */
	public void setNumeroDemande(int numeroDemande) {
		this.numeroDemande = numeroDemande;
	}


	/**
	 * @return the date
	 */
	public LocalDate getDate() {
		return date;
	}


	/**
	 * @param date the date to set
	 */
	public void setDate(LocalDate date) {
		this.date = date;
	}


	/**
	 * @return the libelle
	 */
	public String getLibelle() {
		return libelle;
	}


	/**
	 * @param libelle the libelle to set
	 */
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Demande [getNumeroDemande()=" + getNumeroDemande()
				+ ", getDate()=" + getDate() + ", getLibelle()=" + getLibelle()
				+ "]";
	}

 


}