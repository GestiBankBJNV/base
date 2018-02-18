package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gk.gestibank.dao.DemandeInscriptionDao;
import com.gk.gestibank.model.Bouchons;
import com.gk.gestibank.model.DemandeInscription;

@Repository
public class DemandeInscriptionDaoImpl implements DemandeInscriptionDao {
	
	private List<DemandeInscription> demInscriptions = new ArrayList<DemandeInscription>();

	public DemandeInscriptionDaoImpl() {
		chargerDemandes();
	}

	public void chargerDemandes() {
		Bouchons b = new Bouchons();
		demInscriptions = b.getDemInscriptions();
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
