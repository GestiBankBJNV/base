import { Component, OnInit } from '@angular/core';
import { Compte } from '../classes/compte';
import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';
import { Operation } from '../classes/operation';

declare var $:any;

@Component({
  selector: 'app-client-comptes',
  templateUrl: './client-comptes.component.html',
  styleUrls: ['./client-comptes.component.scss']
})
export class ClientComptesComponent implements OnInit {

	client : Client = CLIENT;
	selectedCompte : Compte;
  openAccount : Boolean = false;
  editIban : Boolean = false;
  accountType : String = "Courant";//Mettre une valeur par défaut, autrement la balise select sera vide au chargement de la page
  awaitingConfirm : Boolean = false;
  startDate : Date;
  endDate : Date;
  displayedOperations : Operation[] = [];
  displayedCount : Number = 20;
  constructor() { }

  ngOnInit() {
  }

  //Selectionner un compte
  selectCompte(compte) {
  	//console.log("Compte selectionné");
  	this.selectedCompte = compte;
    this.openAccount = false;
    this.editIban = false;
    this.awaitingConfirm = false;
    this.startDate = compte.operations[0].date;
    this.endDate = compte.operations[compte.operations.length - 1].date;
    this.refreshOperations(0);
  }

  //Choisir le type de compte à ouvrir
  toggleOpenAccount(){
    this.openAccount = true;
    this.editIban = false;
    this.selectedCompte = null;
    this.awaitingConfirm = false;
  }

  //Valider la demande d'ouverture de compte
  validOpenAccount(){
    if (this.awaitingConfirm){
      this.awaitingConfirm = false;
      //console.log("demande");
      let msg : String = "Votre demande d'ouverture de compte " + this.accountType + " a bien été enregistrée";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});//Pour l'instant, on se contente de créer une notification coté cliet.
      //TODO : envoyer une demande au conseiller
      this.openAccount = false;//On n'affiche plus l'onglet
      this.showNotification('top','center',msg);//On affiche une notif sur la page
    }
    else{
      this.awaitingConfirm = true;
    }
  }
  
  //Valider la demande de commande de chèquier
  validOrderCheck(){
    if (this.awaitingConfirm){
      this.awaitingConfirm = false;
      //console.log("chequier");
      let msg : String = "Votre commande de chèquier pour le compte " + this.selectedCompte.iban + " a bien été enregistrée";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});//Pour l'instant, on se contente de créer une notification coté cliet.
      //TODO : envoyer une demande au conseiller
      this.showNotification('top','center',msg);//On affiche une notif sur la page
    }
    else{
      this.awaitingConfirm = true;
    }
  }

  //Rafraichir la date de départ
  refreshStart(date){
    this.startDate = new Date(date);
    //console.log("start " + this.startDate.toString());
    this.refreshOperations(0);
  }
  
  //Rafraichir la date de fin
  refreshEnd(date){
    this.endDate = new Date(date);
    //console.log("end " + this.endDate.toString());
    this.refreshOperations(0);
  }

  //Rafraichir la liste des operations affichées
  refreshOperations(startIndex) {
    this.displayedOperations = [];
    for (let i = 0; i < this.displayedCount; i++){
      let j = i + startIndex;
      if (j >= this.selectedCompte.operations.length) { break ;}

      if ((this.selectedCompte.operations[j].date >= this.startDate) && (this.selectedCompte.operations[j].date <= this.endDate)){
        this.displayedOperations[i] = this.selectedCompte.operations[j];
      }
    }
    //console.log("count " + this.displayedOperations.length);
  }

  //
  toggleIBAN(){
    this.editIban = (!this.editIban);    
  }

  //Impression
  print(){
    window.print();
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
