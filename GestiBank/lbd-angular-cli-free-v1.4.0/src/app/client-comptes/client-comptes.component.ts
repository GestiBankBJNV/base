import { Component, OnInit } from '@angular/core';
import { Compte } from '../classes/compte';
import { Client } from '../classes/client';
import { CLIENT } from '../classes/FAKES';
import { Operation } from '../classes/operation';
import { showNotification } from '../data-model';

declare var $:any;

@Component({
  selector: 'app-client-comptes',
  templateUrl: './client-comptes.component.html',
  styleUrls: ['./client-comptes.component.scss']
})
export class ClientComptesComponent implements OnInit {

	client : Client = CLIENT;                       //Bouchon
	selectedCompte : Compte;                        //Compte selectionné

  openAccount : Boolean = false;                  //Affichage de l'onglet "ouvrir un compte"
  accountType : String = "account_type_current";  //Type de compte à ouvrir (Mettre une valeur par défaut, autrement la balise select sera vide au chargement de la page)

  //VIREMENT
  transfer : Boolean = false;                     //Affichage de l'onglet "Virement"
  transferAmount : number = 0;                    //Somme à transférer (virement)
  confirmTransfer : Boolean = false;              //Validation du virement
  transferDestIBAN : String = "";                 //IBAN du compte destinataire

  //OUVRIR COMPTE / COMMANDE CHEQUIER
  awaitingConfirm : Boolean = false;              //Validation ("ouvrir un compte" & "Commander un chèquier")
  
  //AFFICHAGE OPERATIONS / PAGINATION
  startDate : Date;                               //Opérations à partir du
  endDate : Date;                                 //Jusqu'au
  displayedOperations : Operation[] = [];         //Operations triées selon les critères
  displayedCount : number = 20;                   //Nombre d'éléments à afficher par page  
  currentPage : number = 0;                       //Index de la page actuelle
  pageCount : number = 10;                        //Nombre de pages (recalculé en fonction des critères)
  

  //CONSTRUCTEUR
  constructor() { }

  //INITIALISATION
  ngOnInit() {
  }


  //Selectionner un compte
  selectCompte(compte) {
  	//console.log("Compte selectionné");
  	this.selectedCompte = compte;
    this.openAccount = false;
    this.transfer = false;
    this.confirmTransfer = false;
    this.awaitingConfirm = false;
    this.startDate = compte.operations[0].date;
    this.endDate = compte.operations[compte.operations.length - 1].date;
    this.refreshOperations(0);
  }

  //Choisir le type de compte à ouvrir
  toggleOpenAccount(){
    this.openAccount = true;
    this.transfer = false;
    this.confirmTransfer = false;
    this.selectedCompte = null;
    this.awaitingConfirm = false;
  }

  //Valider la demande d'ouverture de compte
  validOpenAccount(){
    //On effectue le traitement après le clic de confirmation
    if (this.awaitingConfirm){
      this.awaitingConfirm = false;
      //console.log("demande");
      let msg : String = "Votre demande d'ouverture de compte " + this.accountType + " a bien été enregistrée";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});//Pour l'instant, on se contente de créer une notification coté client.
      //TODO : envoyer une demande au conseiller
      this.openAccount = false;//On n'affiche plus l'onglet
      showNotification('top','center',msg, 'info', "pe-7s-mail-open-file");//On affiche une notif sur la page
    }
    //premier clic
    else{
      this.awaitingConfirm = true;
    }
  }
  
  //Valider la demande de commande de chèquier
  validOrderCheck(){
    //On effectue le traitement après le clic de confirmation
    if (this.awaitingConfirm){
      this.awaitingConfirm = false;
      //console.log("chequier");
      let msg : String = "Votre commande de chèquier pour le compte " + this.selectedCompte.iban + " a bien été enregistrée";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});//Pour l'instant, on se contente de créer une notification coté cliet.
      //TODO : envoyer une demande au conseiller
      showNotification('top','center',msg, 'info', "pe-7s-mail-open-file");//On affiche une notif sur la page
    }
    else{
      this.awaitingConfirm = true;
    }
  }
  //Valider un virement
  validTransfer(){
    //Verification de l'IBAN destinataire
    if (!this.checkIBAN()){
      this.confirmTransfer = false;
      return;
    }
    //On effectue kle traitement après kle clic de confirmation
    if (this.confirmTransfer){
      this.confirmTransfer = false;
      //console.log("chequier");
      let msg : String = "Votre demande de virement vers le compte " + this.transferDestIBAN + " a bien été enregistrée";
      this.client.notifications.splice(0,0, {libelle : msg, date : new Date(), isRead : false});//Pour l'instant, on se contente de créer une notification coté cliet.
      //TODO : envoyer une demande au conseiller
      showNotification('top','center',msg, 'info', "pe-7s-mail-open-file");//On affiche une notif sur la page
      this.transfer = false; //On retourne sur la page opérations.
    }
    //premier clic
    else{
      this.confirmTransfer = true;
    }
  }

  //vérifier que le numéro IBAN utilisé pour le virement est correct
  checkIBAN() : boolean{
    return (this.transferDestIBAN != "");//TODO : prévoir un meilleur test
  }

  //Rafraichir la date de départ
  refreshStart(date){
    this.startDate = new Date(date);
    this.refreshOperations(0);
  }
  
  //Rafraichir la date de fin
  refreshEnd(date){
    this.endDate = new Date(date);
    this.refreshOperations(0);
  }

  //Rafraichir la liste des operations affichées
  refreshOperations(startIndex : number) {
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
  toggleTransfer(){
    this.transfer = (!this.transfer);
    this.awaitingConfirm = false;    
    this.confirmTransfer = false;
  }

  //Impression
  print(){
    //N'imprime que ce qui est visible à l'écran, à la manière d'un printScreen...
    //Apparemment, il faut repasser les éléments flottants du css en display-block
    //On peut également reconstituer uniquement une page avec les éléments qui nous intéressent, lancer l'impression, puis remettre la page à son état d'origine.
    //à voir, donc...
    window.print();    
  }

  //PAGINATION - Page précédente
  prevPage(){
    this.currentPage--;
    this.refreshOperations(this.currentPage * this.displayedCount);
  }

  //Page suivante
  nextPage(){
    this.currentPage++;
    this.refreshOperations(this.currentPage * this.displayedCount);
  }

  //Aller à la page x
  goPage(p : number){
    this.currentPage = p;
    this.refreshOperations(this.currentPage * this.displayedCount);
  }
}
