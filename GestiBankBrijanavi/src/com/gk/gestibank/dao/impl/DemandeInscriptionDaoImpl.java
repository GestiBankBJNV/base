package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.DemandeInscriptionDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.DemandeInscription;

@Repository
public class DemandeInscriptionDaoImpl implements DemandeInscriptionDao {
	
	private List<DemandeInscription> demInscriptions = new ArrayList<DemandeInscription>();

	public DemandeInscriptionDaoImpl() {
		chargerDemandes();
	}

	public void chargerDemandes() {
		
		Client cl1 = new Client();
		cl1.setNom("Dupont");
		cl1.setPrenom("Robert");
		
		Client cl2 = new Client();
		cl2.setNom("Lombard");
		cl2.setPrenom("J�r�me");
		
		DemandeInscription d1 = new DemandeInscription();
		d1.setCoordonnees(cl1);
		d1.setDateInscription(new Date());
		d1.setId(1);
		
		DemandeInscription d2 = new DemandeInscription();
		d2.setCoordonnees(cl2);
		d2.setDateInscription(new Date());
		d2.setId(2);
		
		demInscriptions.add(d1);
		demInscriptions.add(d2);
	}
	
	@Override
	public List<DemandeInscription> getDemandesInscription() {
		return demInscriptions;
	}
	
	@Override
	public DemandeInscription getDemandeInscrById(int id) {
		for(DemandeInscription d : demInscriptions) {
			if(d.getId() == id) {
				return d;
			}
		}
		return null;
	}

	@Override
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
		int i = demInscriptions.indexOf(demandeInscr);
		demInscriptions.set(i, demandeInscr);
	}

}
