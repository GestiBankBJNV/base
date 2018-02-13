import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';
import { Conseiller, Client, DemandeInscription, Utilisateur } from '../data-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-inscription',
  templateUrl: './new-inscription.component.html',
  styleUrls: ['./new-inscription.component.scss'],
  providers: [ConseillerService]
})
export class NewInscriptionComponent implements OnInit {

	demandes: DemandeInscription[];

  constructor(private cs: ConseillerService) { }

  ngOnInit() {

  	this.demandes = this.cs.getListDemandeInscriptionByConseiller("0002");
  }

  verifInscription(d: DemandeInscription){

  	let coordonnee: Utilisateur;


  }

}
