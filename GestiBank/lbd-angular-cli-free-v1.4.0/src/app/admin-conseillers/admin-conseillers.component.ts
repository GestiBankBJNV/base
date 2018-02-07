import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Conseiller }        from '../data-model';
import { ConseillerService } from '../conseiller-service';

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

  /* Récuperation de tous les conseillers via le service */
	getConseillers() {
  	this.isLoading = true;
  	this.conseillers = this.conseillerService.getConseillers()
                    		// Normalement à faire error handling
                    		.finally(() => this.isLoading = false);      

    this.selectedConseiller = undefined;
	} 

  /* Méthode utilisée à la validation de la recherche de conseiller */
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

  /* Sélection du conseiller au clic sur son nom */
  select(conseiller: Conseiller) { 
    this.selectedConseiller = conseiller; 
    this.derouler = false; 
  }

  /* Méthode utilisée pour la création d'un nouveau conseiller : on affiche un formulaire vide */
  afficherNouvelleFiche() {
    this.isSearching = false;
    this.nouvelleFiche = true;
    this.selectedConseiller = undefined; // déselectionner un conseiller
    this.nouveauConseiller = undefined; // Pour effacer d'éventuelles informations
    this.nouveauConseiller = new Conseiller();
    this.nouveauConseiller.nom = this.nomConseillerACreer;
    this.nouveauConseiller.matricule = '####'; // à calculer en fonction des matricules existants
    this.nouveauConseiller.dateDebutContrat = new Date();
  }

  /* ** Méthodes pour modifier les boutons de la fiche conseiller en fonction de son utilisation ** */
  /* Méthode utilisée à l'affichage d'une fiche vide --> voir adminFicheConseillerComponent */
  onCreate() {
    this.nouvelleFiche = false;
  }
  /* Méthode utilisée à l'affichage d'une fiche conseiller --> voir adminFicheConseillerComponent */
  onDelete() {
    var temp = this.selectedConseiller.prenom + ' ' + this.selectedConseiller.nom;
    this.selectedConseiller = undefined;
    this.isSearching = false;
  }   
}
