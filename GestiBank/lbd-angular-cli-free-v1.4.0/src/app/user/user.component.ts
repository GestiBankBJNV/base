import { Component, OnInit } from '@angular/core';

import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	client : Client = CLIENT;
	//Client temporaire pour stocker les infos en attendant confirmation
	fakeClient;

	//Boolean utilisé lors de la validation du formulaire
	waitConfirm = false;

  constructor() { 
  }

  //On rafraichit la variable temporaire au chargement du formulaire
  ngOnInit() {
	this.initFakeClient();
  }

  //Initialiser le client temporaire
  initFakeClient(){
  	this.fakeClient = {
		username : this.client.username,
		password : this.client.password,
		nom : this.client.nom,
		prenom : this.client.prenom,
		mail : this.client.mail,
		entreprise : this.client.entreprise,
		adresse : this.client.adresse,
		ville : this.client.ville,
		cp : this.client.codePostal,
		pays : this.client.pays
	};
  }

  //Remettre la variable waitConfirm a false (utilisé lors de la modification d'un champ)
  resetWait(){
  	this.waitConfirm = false;
  }

  //Validation du formulaire
  validForm(){
  	//l'utilisateur devra cliquer deux fois sur le bouton pour confirmer les nouvelles informations
  	if (!this.waitConfirm){
  		this.waitConfirm = true;
  	}
  	//mise à jour des infos du client depuis la variable temporaire
  	else{
  		this.client.password = this.fakeClient.password;
  		this.client.adresse = this.fakeClient.adresse;
  		this.client.codePostal = this.fakeClient.cp;
  		this.client.entreprise = this.fakeClient.entreprise;
  		this.client.ville = this.fakeClient.ville;
  		this.client.mail = this.fakeClient.mail;
  		this.client.pays = this.fakeClient.pays;
  		
  		//On attend une nouvelle confirmation après la validation d'un formulaire
  		this.resetWait();
  		//console.log(this.client.mail);
  	}
  }

  //Texte du bouton, en fonction de l'état de validation
  getConfirmBTText(){
  	if (this.waitConfirm){  		
  		return "Confirmer";
  	}
  	return "Mettre à jour";
  }
}
