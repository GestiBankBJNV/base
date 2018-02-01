import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Conseiller }        from '../data-model';
import { ConseillerService } from '../conseiller-service';

declare var $:any;

@Component({
  selector: 'admin-conseillers',
  templateUrl: './admin-conseillers.component.html',
  styleUrls: ['./admin-conseillers.component.scss']
})
export class AdminConseillersComponent implements OnInit {

  	conseillers: Observable<Conseiller[]>;
  	isLoading = false;
  	isSearching = false;
    nouvelleFiche = false;
  	selectedConseiller: Conseiller;
    nouveauConseiller: Conseiller;
    nomConseillerACreer: string = '';
  	conseillerRecherche: string = '';
    derouler: boolean = true;

  	constructor(private conseillerService: ConseillerService) { }

  	ngOnInit() {
  	}

  	getConseillers() {
    	this.isLoading = true;
    	this.conseillers = this.conseillerService.getConseillers()
                      		// Normalement à faire error handling
                      		.finally(() => this.isLoading = false);      

      this.selectedConseiller = undefined;
  	}

  	select(conseiller: Conseiller) { 
      this.selectedConseiller = conseiller; 
      this.derouler = false; 
    } 

  	clicRechercher() {
  		this.isSearching = true;
      this.nouvelleFiche = false;
      this.derouler = true; 
      this.getConseillers(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                             /* il n'y en a pas beaucoup donc c'est pas si grave, après ce code changera pour chercher les infos dans une BDD de toute façon */
      this.isLoading = true;
      this.conseillers = this.conseillerService.getConseillersByNameAndID(this.conseillerRecherche, this.conseillerRecherche) // ce champ contient soit un nom, soit un matricule
                      		// Normalement à faire : error handling
                      		.finally(() => this.isLoading = false);
  	}

    afficherNouvelleFiche() {
      this.isSearching = false;
      this.nouvelleFiche = true;
      this.selectedConseiller = undefined; // déselectionner un conseiller
      this.nouveauConseiller = undefined; // Pour effacer d'éventuelles informations
      this.nouveauConseiller = new Conseiller();
      this.nouveauConseiller.nom = this.nomConseillerACreer;
      this.nouveauConseiller.matricule = '5698'; // à calculer en fonction des matricules existants
    }

    onCreate() {
      this.nouvelleFiche = false;
    }

    onDelete() {
      var temp = this.selectedConseiller.prenom + ' ' + this.selectedConseiller.nom;
      this.selectedConseiller = undefined;
      this.isSearching = false;
    }   

}
