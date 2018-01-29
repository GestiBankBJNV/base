
import { Component, OnInit } from '@angular/core';

import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';

declare var $:any;


@Component({
  selector: 'app-client-profil',
  templateUrl: './client-profil.component.html',
  styleUrls: ['./client-profil.component.scss']
})
export class ClientProfilComponent implements OnInit {

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
      let msg = "Une demande de modification de profil a été envoyée à votre conseiller. Elle sera traitée dès que possible";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});
      this.showNotification('top','center', msg);
  	}
  }

  //Texte du bouton, en fonction de l'état de validation
  getConfirmBTText(){
  	if (this.waitConfirm){  		
  		return "Confirmer";
  	}
  	return "Mettre à jour";
  }

  //Afficher une notification à la validation du formulaire
  showNotification(from, align, msg){
      //const type = ['','info','success','warning','danger'];

      //var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-mail-open-file",
          message: msg
      },{
          type: 'info',
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
