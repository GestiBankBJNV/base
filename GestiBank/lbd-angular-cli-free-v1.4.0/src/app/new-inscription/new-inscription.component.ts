import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';
import { Conseiller, Client, DemandeInscription, Utilisateur } from '../data-model';
import { DatePipe } from '@angular/common';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-new-inscription',
  templateUrl: './new-inscription.component.html',
  styleUrls: ['./new-inscription.component.scss'],
  providers: [ConseillerService]
})
export class NewInscriptionComponent implements OnInit {

	demandes: Observable<DemandeInscription[]>;

  constructor(private cs: ConseillerService) { }

  ngOnInit() {

  	this.demandes = this.cs.getDemandesInscriptionFromConseiller("425A");
  }

  verifInscription(d: DemandeInscription){

  	let coordonnee: Utilisateur;


  }

}
