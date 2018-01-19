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
  	selectedConseiller: Conseiller;

  	conseillerRecherche: string = '';

  	constructor(private conseillerService: ConseillerService) { }

  	ngOnInit() {
  	}

  	getConseillers() {
    	this.isLoading = true;
    	this.conseillers = this.conseillerService.getConseillers()
                      		// Todo: error handling
                      		.finally(() => this.isLoading = false);
    	this.selectedConseiller = undefined;
  	}

  	select(conseiller: Conseiller) { this.selectedConseiller = conseiller; } 

  	clicRechercher() {
  		this.isSearching = true;
      	this.getConseillers(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
      	this.isLoading = true;
      	console.log('recherche du conseiller ' + this.conseillerRecherche);
      	this.conseillers = this.conseillerService.getConseillersByName(this.conseillerRecherche)
                      		// Todo: error handling
                      		.finally(() => this.isLoading = false);
  	}


}
