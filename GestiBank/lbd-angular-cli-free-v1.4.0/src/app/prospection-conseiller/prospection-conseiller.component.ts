import { Component, OnInit } from '@angular/core';
import { Conseiller, DemandeInscription } from '../data-model';

@Component({
  selector: 'app-prospection-conseiller',
  templateUrl: './prospection-conseiller.component.html',
  styleUrls: ['./prospection-conseiller.component.scss']
})
export class ProspectionConseillerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let user: Conseiller = JSON.parse(localStorage.getItem("user"));
  		console.log(user);
  	var demandeInscription: DemandeInscription[]  = user.demandesInscription;
  }

}
