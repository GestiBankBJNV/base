package com.gk.gestibank.service.conseiller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.gk.gestibank.model.Client;
import com.gk.gestibank.model.Conseiller;
import com.gk.gestibank.model.DemandeInscription;

// Bouchon en attendant la BDD
public class ChargerConseiller implements IChargerConseiller {

	@Override
	public List<Conseiller> charger() {
		List<Conseiller> conseillers = new ArrayList<Conseiller>();

		Conseiller c1 = new Conseiller(1, "Jeanne", "Grelier", "Jaja", "1234",
				"j@email.com", "0658654236", "conseiller", "425A", new Date(),
				new ArrayList<Client>(), new ArrayList<DemandeInscription>());
		Conseiller c2 = new Conseiller(2, "JD", "Eymann", "Jdeon", "1234",
				"jd@email.com", "0657894236", "conseiller", "426A", new Date(),
				new ArrayList<Client>(), new ArrayList<DemandeInscription>());
		Conseiller c3 = new Conseiller(3, "Jojo", "Lapin", "Jojo", "1234",
				"jo@email.com", "0658656546", "conseiller", "427A", new Date(),
				new ArrayList<Client>(), new ArrayList<DemandeInscription>());
		
		conseillers.add(c1);
		conseillers.add(c2);
		conseillers.add(c3);

		return conseillers;
	}

}
