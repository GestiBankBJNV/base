package com.gk.gestibank.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.DemandeInscriptionDao;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.services.IDemandeService;

@Service
public class DemandeService implements IDemandeService {
	
	@Autowired
	private DemandeInscriptionDao dInscriptionDao;

	
	public List<DemandeInscription> getDemandesInscription() {
		return dInscriptionDao.getDemandesInscription();
	}
	
	
	public DemandeInscription getDemandeInscrById(int id) {
		return dInscriptionDao.getDemandeInscrById(id);
	}

	
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
		dInscriptionDao.updateDemandeInscription(demandeInscr);
	}

}
