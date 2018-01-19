import { Component, OnInit } from '@angular/core';
import { Compte } from '../classes/compte';
import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';

@Component({
  selector: 'app-client-comptes',
  templateUrl: './client-comptes.component.html',
  styleUrls: ['./client-comptes.component.scss']
})
export class ClientComptesComponent implements OnInit {

	client : Client = CLIENT;
	selectedCompte : Compte;
  constructor() { }

  ngOnInit() {
  }

  selectCompte(compte) {
  	console.log("Compte selectionné");
  	this.selectedCompte = compte;
  }
}
