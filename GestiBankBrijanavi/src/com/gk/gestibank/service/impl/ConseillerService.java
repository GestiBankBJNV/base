package com.gk.gestibank.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.ConseillerDao;
import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;
import com.gk.gestibank.service.IConseillerService;

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
		// Aucune véfification : le formulaire a déjà validé les champs
		// On génère un matricule pour le conseiller
		conseiller.setMatricule(generateMatricule(conseiller));
		conseillerDao.createConseiller(conseiller);
	}

	public String generateMatricule(Conseiller conseiller) {
		SimpleDateFormat sdate = new SimpleDateFormat("MMYY");
		String matricule = conseiller.getNom().toUpperCase().charAt(0) + sdate.format(conseiller.getDateDebutContrat())
				+ "A";
		return matricule;
	}

	@Override
	public void deleteConseiller(String matricule) {
		// TODO : On doit vérifier si la liste de client est nulle avant de supprimer
		// Attention : nullPointerException si matricule ne correspond à aucun
		// conseiller
		if (conseillerDao.getClientsFromConseiller(matricule).isEmpty()) {
			conseillerDao.deleteConseiller(matricule);
		}
	}

	@Override
	public void updateConseiller(Conseiller conseiller) {
		// Aucune véfification : le formulaire a déjà validé les champs
		conseillerDao.updateConseiller(conseiller);
	}

	@Override
	public List<Conseiller> getConseillerByNameOrMatricule(String recherche) {
		return conseillerDao.getConseillerByNameOrMatricule(recherche);
	}

	@Override
	public void addClientToConseiller(Client client, String matricule) {
		// vérifs ?
		conseillerDao.addClientToConseiller(client, matricule);
	}

	@Override
	public void deleteClientFromConseiller(int idClient) {
		// trouver le matricule du conseiller
		String matricule = "";
		List<Conseiller> conseillers = getAll();
		for (int i = 0; i < conseillers.size(); i++) {
			for (int j = 0; j < (conseillers.get(i)).getClients().size(); j++) {
				if (conseillers.get(i).getClients().get(i).getId() == idClient) {
					matricule = conseillers.get(i).getMatricule();
				}
			}
		}
		if(matricule != "") {
			conseillerDao.deleteClientFromConseiller(idClient, matricule);
		}
	}

	@Override
	public List<DemandeInscription> getInscriptionsFromConseiller(String matricule) {
		// vérifs ?
		return conseillerDao.getInscriptionsFromConseiller(matricule);
	}

	@Override
	public void addInscriptionToConseiller(DemandeInscription demandeInscription, String matricule) {
		// vérifs ?
		conseillerDao.addInscriptionToConseiller(demandeInscription, matricule);
	}

	@Override
	public List<Client> getClientsFromConseiller(String matricule) {
		// vérifs ?
		return conseillerDao.getClientsFromConseiller(matricule);
	}

	public Conseiller getConseillerWithClient(int idClient) {
		for (Conseiller c : conseillerDao.getAll()) {
			for (Client cl : c.getClients()) {
				if (cl.getId() == idClient) {
					return c;
				}
			}
		}
		return null;
	}

}
