import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { CLIENT } from '../classes/FAKES';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.scss']
})
export class ClientAccueilComponent implements OnInit {
	client : Client = CLIENT;
  constructor() { }

  ngOnInit() {
  }

}
