package com.gk.gestibank.service.conseiller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

@Service
public class ConseillerService implements IConseillerService {
	
	@Autowired
	private ConseillerDao conseillerDao;
	
	@Override
	public List<Conseiller> getAll() {
		return conseillerDao.getAll();
	}

	@Override
	public void createConseiller(Conseiller conseiller) {
		// Aucune v�fification : le formulaire a d�j� valid� les champs
		conseillerDao.createConseiller(conseiller);
	}

	@Override
	public void deleteConseiller(String matricule) {
		// On doit v�rifier si la liste de client est nulle avant de supprimer
		if(conseillerDao.getClientsFromConseiller(matricule).isEmpty()){
			conseillerDao.deleteConseiller(matricule);
		}
	}

	@Override
	public void updateConseiller(Conseiller conseiller) {
		// Aucune v�fification : le formulaire a d�j� valid� les champs
		conseillerDao.updateConseiller(conseiller);		
	}

	@Override
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche) {
		return conseillerDao.getConseillerByNameOrMatricule(recherche);
	}

	@Override
	public void addClientToConseiller(Client client, String matricule) {
		// v�rifs ?
		conseillerDao.addClientToConseiller(client, matricule);		
	}

	@Override
	public void deleteClientFromConseiller(int idClient, String matricule) {
		// v�rifs ?
		conseillerDao.deleteClientFromConseiller(idClient, matricule);		
	}

	@Override
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule) {
		// v�rifs ?
		return conseillerDao.getInscriptionsFromConseiller(matricule);
	}

	@Override
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule) {
		// v�rifs ?
		conseillerDao.addInscriptionToConseiller(demandeInscription, matricule);
	}

	@Override
	public List<Client> getClientsFromConseiller(String matricule) {
		// v�rifs ?
		return conseillerDao.getClientsFromConseiller(matricule);
	}

}
