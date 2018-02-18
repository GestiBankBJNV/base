package com.gk.gestibank.dao.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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
		cl2.setPrenom("Jérôme");
		
		Client cl3 = new Client();
		cl3.setNom("Aurélie");
		cl3.setPrenom("Jaudoin");
		
		Calendar cal1 = new GregorianCalendar(2017, 11, 23);
		Date date1 = cal1.getTime();
		
		Calendar cal2 = new GregorianCalendar(2018, 1, 3);
		Date date2 = cal2.getTime();
		
		Calendar cal3 = new GregorianCalendar(2018, 0, 18);
		Date date3 = cal3.getTime();
		
		Calendar cal4 = new GregorianCalendar(2018, 1, 5);
		Date date4 = cal4.getTime();
		
		DemandeInscription d1 = new DemandeInscription();
		d1.setCoordonnees(cl1);
		d1.setDateInscription(date1);
		d1.setId(1);
		
		DemandeInscription d2 = new DemandeInscription();
		d2.setCoordonnees(cl2);
		d2.setDateInscription(date2);
		d2.setId(2);
		
		DemandeInscription d3 = new DemandeInscription();
		d3.setCoordonnees(cl3);
		d3.setDateInscription(date3);
		d3.setDateAffectation(date4);
		d3.setStatut("traitée");
		d3.setId(3);
		
		demInscriptions.add(d1);
		demInscriptions.add(d2);
		demInscriptions.add(d3);
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
