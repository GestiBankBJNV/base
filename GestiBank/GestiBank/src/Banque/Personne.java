package Banque;


/**
 * 
 */
public class Personne {

	 private int id; 
	 private String nom;
	 private String prenom;
	 private String email;
	 private String pseudo;
	 private Adresse adresse;
	 private String numTel;
	 
    public Personne() {
    	nom="inconnu";
    	adresse = new Adresse();
    	
    }

    public Personne(String email){
    	this();
    	this.email = email;
    }
   
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}





	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	public void ouvrirCompte(String nom, String prenom, int id, String email) {
        // TODO implement here
    }

    public void voirCoursDevise() {
        // TODO implement here
    }
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	
	public String toString() {
		return "Personne [getNom()=" + getNom() + ", getPrenom()="
				+ getPrenom() + ", getEmail()=" + getEmail() + ", getPseudo()="
				+ getPseudo() + ", getAdresse()=" + getAdresse()
				+ ", getNumTel()=" + getNumTel() + ", getId()=" + getId() + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Personne other = (Personne) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
}