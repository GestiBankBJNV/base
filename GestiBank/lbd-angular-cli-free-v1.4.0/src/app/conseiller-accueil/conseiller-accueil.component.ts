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

	//nseillerService: ConseillerService =  new ConseillerService();
	//conseiller: Conseiller[];
	clients: Client[];

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {

  	this.clients = this.conseillerService.getListeClientsFromConseiller("0003");

  }

}
