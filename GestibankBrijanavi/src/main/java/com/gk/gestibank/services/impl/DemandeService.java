package com.gk.gestibank.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gk.gestibank.dao.DemandeClientDao;
import com.gk.gestibank.dao.DemandeInscriptionDao;
import com.gk.gestibank.dao.DemandeModifDao;
import com.gk.gestibank.model.DemandeClient;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.model.DemandeModif;
import com.gk.gestibank.services.IDemandeService;

@Service
public class DemandeService implements IDemandeService {
	
	@Autowired
	private DemandeInscriptionDao dInscriptionDao;
	
	@Autowired
	private DemandeClientDao demandeClientDao;
	
	@Autowired
	private DemandeModifDao demandeModifDao;

	@Transactional
	public List<DemandeInscription> getDemandesInscription() {
		return dInscriptionDao.getDemandesInscription();
	}
	
	@Transactional
	public DemandeInscription getDemandeInscrById(int id) {
		return dInscriptionDao.getDemandeInscrById(id);
	}

	@Transactional
	public void updateDemandeInscription(DemandeInscription demandeInscr) {
		dInscriptionDao.updateDemandeInscription(demandeInscr);
	}
	
	@Transactional
	public void sendDemandeClient(int clientId, DemandeClient demandeClient){
		demandeClientDao.addToClient(clientId, demandeClient);
	}
	
	@Transactional
	public void sendDemandeModif(int clientId, DemandeModif demandeModif){
		demandeModifDao.addToClient(clientId, demandeModif);
	}
	

	@Transactional
	public void addDemandeInscription(DemandeInscription demandeInscr) {
		dInscriptionDao.addDemandeInscription(demandeInscr);		
	}

}
