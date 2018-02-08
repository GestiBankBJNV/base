import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';

import { Conseiller, Client } from '../data-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-conseiller-accueil',
  templateUrl: './conseiller-accueil.component.html',
  styleUrls: ['./conseiller-accueil.component.scss'],
  providers:[ConseillerService]
})

export class ConseillerAccueilComponent implements OnInit {
	//Création de la variable de type clients pour la récupération des clients affectés au conseiller.
	clients: Client[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {

  	//initiatlisation pour l'affichage dans le tableau des différents clients.
  	this.clients = this.conseillerService.getListeClientsFromConseiller("0002");

  }

}
