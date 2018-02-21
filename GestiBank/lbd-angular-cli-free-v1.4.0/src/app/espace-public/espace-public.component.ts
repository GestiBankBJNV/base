import { Component, OnInit } from '@angular/core';
import { PublicFicheInscriptionComponent } from '../public-fiche-inscription/public-fiche-inscription.component';

@Component({
  selector: 'app-espace-public',
  templateUrl: './espace-public.component.html',
  styleUrls: ['./espace-public.component.scss']
})
export class EspacePublicComponent implements OnInit {

	inscription = false;

  	constructor() { }

  	ngOnInit() {
  	}

  	onCreate() {
    	this.inscription = false;
  	}

}
