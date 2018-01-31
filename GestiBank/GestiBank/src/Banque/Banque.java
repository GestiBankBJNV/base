package Banque;
import java.util.*;


public class Banque {

    private Set<Client> clients;
    private Set<Conseiller> Conseillers;
    private SuperAdmin superAdmin;
    
	public Banque(Set<Client> clients, Set<Conseiller> conseillers,
			SuperAdmin superAdmin) {
		
		this.clients = clients;
		Conseillers = conseillers;
		this.superAdmin = superAdmin;
	}

	public Set<Client> getClients() {
		return clients;
	}

	public void setClients(Set<Client> clients) {
		this.clients = clients;
	}

	public Set<Conseiller> getConseillers() {
		return Conseillers;
	}

	public void setConseillers(Set<Conseiller> conseillers) {
		Conseillers = conseillers;
	}

	public SuperAdmin getSuperAdmin() {
		return superAdmin;
	}

	public void setSuperAdmin(SuperAdmin superAdmin) {
		this.superAdmin = superAdmin;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Banque [getClients()=" + getClients() + ", getConseillers()="
				+ getConseillers() + ", getSuperAdmin()=" + getSuperAdmin()
				+ "]";
	}
    
	
   
    







}