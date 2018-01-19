import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-conseillers',
  templateUrl: './admin-conseillers.component.html',
  styleUrls: ['./admin-conseillers.component.scss']
})
export class AdminConseillersComponent implements OnInit {

  conseillerRecherche: string = '';

  	constructor() { }

  	ngOnInit() {
  	}

  	clicRechercher(){
  		console.log('recherche du conseiller ' + this.conseillerRecherche);
		/* Mettre ici le code pour rechercher si le conseiller appartient bien à la base de données */
		

	}


}
