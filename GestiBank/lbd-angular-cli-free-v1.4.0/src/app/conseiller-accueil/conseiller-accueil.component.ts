import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';

import { Conseiller, Client, Demande } from '../data-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-conseiller-accueil',
  templateUrl: './conseiller-accueil.component.html',
  styleUrls: ['./conseiller-accueil.component.scss'],
  providers:[ConseillerService]
})

export class ConseillerAccueilComponent implements OnInit {

	clients: Client[];
  demandes: Demande[];
  nomDemande: String;
  idSelectionne: number = null;
  isDetailDemande: boolean = false;

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {

  	this.clients = this.conseillerService.getListeClientsFromConseiller("0002");

  }

  voirDemande(c: Client){


    if (c.id != this.idSelectionne && c.demandes.length != 0) {
      this.isDetailDemande = true;
      this.demandes = c.demandes;
      this.nomDemande = c.nom;
    }else{
      this.isDetailDemande = false;
    }

  }

}
