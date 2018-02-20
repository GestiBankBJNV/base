package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

@Repository
public class ConseillerDaoImpl implements ConseillerDao {
	
	public ArrayList<Conseiller> conseillers = new ArrayList<Conseiller>() ; 
	
	@PersistenceContext
	private EntityManager em;
	
	public ConseillerDaoImpl() {
		//chargerConseillers();
	}
	
	public void chargerConseillers(){
		Bouchons b = new Bouchons();
		conseillers = b.getConseillers();
	}
	
	public List<Conseiller> getAll() {
		//return conseillers;
		Query query = em.createQuery("SELECT c FROM Conseiller as c");
		return (List<Conseiller>)query.getResultList();
	}

	public void createConseiller(Conseiller conseiller) {
		//conseillers.add(conseiller);
		em.persist(conseiller);
	}
	
	public void updateConseiller(Conseiller conseiller) {	
//		int i = conseillers.indexOf(conseiller);
//		try {
//			conseillers.set(i, conseiller);
//		} catch (ArrayIndexOutOfBoundsException e) {
//			System.out.println("L'index " + i + " ne fait pas partie de la liste conseillers");
//		}	
		em.merge(conseiller);
	}
	
	public void deleteConseiller(String matricule) {
//		for(Conseiller c : conseillers){
//			if(c.getMatricule().equals(matricule)){
//				conseillers.remove(c);
//				break;
//			}
//		}
		
		Query query = em.createQuery("DELETE FROM Conseiller as c WHERE c.matricule = :matricule");
		query.setParameter("matricule", matricule);
		query.executeUpdate();
	}
	
	public Conseiller getConseillerByMatricule(String matricule) {
//		for(Conseiller c : conseillers){
//			if(c.getMatricule().equals(matricule)){
//				return c;
//			}
//		}
		//return null;
		Query query = em.createQuery("SELECT c FROM Conseiller as c WHERE c.matricule = :matricule");
		query.setParameter("matricule", matricule);
		return (Conseiller)query.getResultList(); // todo : � revoir
	}	
	
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche) {
//		List<Conseiller> l = new ArrayList<Conseiller>();
//		for(Conseiller c : conseillers){
//			if(c.getNom().contains(recherche) || c.getMatricule().equals(recherche)){
//				l.add(c);
//			}
//		}
//		return l;
		
		Query query = em.createQuery("SELECT c FROM Conseiller as c WHERE c.matricule = :recherche OR c.nom LIKE :rechercheLike");
		query.setParameter("recherche", recherche);
		query.setParameter("rechercheLike", recherche + "%");
		return (List<Conseiller>)query.getResultList();
	}

	public List<Client> getClientsFromConseiller(String matricule) {
		Conseiller c = getConseillerByMatricule(matricule);
		if(c != null) {
			return c.getClients();
		}
		return new ArrayList<Client>();
	}

	public void addClientToConseiller(Client client, String matricule) {
		List<Client> clients = getClientsFromConseiller(matricule);
		clients.add(client);
		getConseillerByMatricule(matricule).setClients(clients);		
	}

	public void deleteClientFromConseiller(int idClient, String matricule) {
//		List<Client> clients = getClientsFromConseiller(matricule);
//		Client client = new Client();
//		client.setId(idClient);
//		clients.remove(client);
//		getConseillerByMatricule(matricule).setClients(clients);
		
		
		Query query = em.createQuery("DELETE Client as cl FROM Conseiller as c WHERE cl.id = :id AND c.matricule = :matricule ");
		query.setParameter("id", idClient);
		query.setParameter("matricule", matricule);
		query.executeUpdate();
	}

	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule) {
		Conseiller c = getConseillerByMatricule(matricule);
		return c.getDemandesInscription();
	}
	
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule) {
		List<DemandeInscription> inscription = getInscriptionsFromConseiller(matricule);
		inscription.add(demandeInscription);
		getConseillerByMatricule(matricule).setDemandesInscription(inscription);		
	}

	
	public void changerConseiller(int idClient, int idConseiller) {
		// TODO Auto-generated method stub
		
	}

}
