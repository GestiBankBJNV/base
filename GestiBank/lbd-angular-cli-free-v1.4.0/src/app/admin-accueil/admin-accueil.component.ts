import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.scss']
})
export class AdminAccueilComponent implements OnInit {

	conseillerRecherche: string = '';

  	constructor() { }

  	ngOnInit() {
  	}

  	clicRechercher(){
  		console.log('recherche du conseiller ' + this.conseillerRecherche);
		/* Mettre ici le code pour rechercher si le conseiller appartient bien à la base de données */
		

	}

}
