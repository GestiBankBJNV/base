import { Component, OnInit } from '@angular/core';
import { TablesComponent } from '../tables/tables.component'
import { Conseiller, Client, DemandeInscription, demandesInscription} from '../data-model';
import { ConseillerService } from '../conseiller-service';
import { ClientService } from '../client-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-admin-affectations',
  templateUrl: './admin-affectations.component.html',
  styleUrls: ['./admin-affectations.component.scss']
})
export class AdminAffectationsComponent implements OnInit {

	public tableData = []; // tableau contenant les demandes d'inscription
	private affecter: boolean = false; // booléen pour indiquer à l'html que l'on veut afficher la div des affectations
  private trieCroissantDemande : boolean = true; // booléen pour indiquer à l'html que l'on veut trier par ordre croissant ou décroissant les dates de demande
  private trieCroissantAffectation : boolean = true; // booléen pour indiquer à l'html que l'on veut trier par ordre croissant ou décroissant les dates d'affectation

  conseillers: Observable<Conseiller[]>; // pour récupérer la liste des conseillers afin de leur affecter des clients
  isLoading = false; // simulation de latence
  isSearching = false; // quand on affiche une liste de conseillers après avoir chercher dans une input text
  conseillerRecherche: string = ''; // garder sous la main le conseiller recherché
  selectedDemande: DemandeInscription; // garder sous la main la demande que l'on va affecter à un conseiller

  	constructor(private conseillerService: ConseillerService, private clientService: ClientService) { }

  	ngOnInit() {
  	  this.recupTable(); // cette table devra être récupérée depuis une BDD : ici on utilise une méthode         	    
  	}

    recupTable(){ // Table qui contient les demandes qui seront de type Demande                  
      this.tableData = demandesInscription;    
    }

    getConseillers() { // récupère tous les conseillers via le service
      this.isLoading = true;
      this.conseillers = this.conseillerService.getConseillers()
                          // Todo: error handling
                          .finally(() => this.isLoading = false);
    }


    // méthode utilisée au clic du bouton affecter dans le tableau
    affect(demande: DemandeInscription) { 
      this.affecter = true;
      this.selectedDemande = demande;
    }

    select(conseiller: Conseiller) { // Méthode utilisée au clic sur le nom d'un conseiller
      this.affecter = false;
      this.isSearching = false;
      // Modifier le statut et la date d'affectation
      this.selectedDemande.dateAffectation = new Date();
      this.selectedDemande.statut = "en cours";
      // Ajouter la demande à la liste du conseiller
      conseiller.demandes.push(this.selectedDemande);
      this.conseillerService.updateConseiller(conseiller).subscribe();  
        // TODO : Notifier l'affectation
        //this.notif.showNotificationMessage('top', 'right', 'Modifications effectuées', 'warning', 'pe-7s-magic-wand');
      
    } 

    clicRechercherConseiller() { // Méthode utilisée pour assurer la saisie du conseiller auquel affecter la demande
      this.isSearching = true;
      this.getConseillers(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                             /* il n'y en a pas beaucoup donc c'est pas si grave, après ce code changera pour chercher les infos dans une BDD de toute façon */
      this.isLoading = true;
      console.log('recherche du conseiller ' + this.conseillerRecherche);
      this.conseillers = this.conseillerService.getConseillersByNameAndID(this.conseillerRecherche, this.conseillerRecherche) // ce champ contient soit un nom, soit un matricule
                          // Todo: error handling
                          .finally(() => this.isLoading = false);
    }

    /* ***** Méthodes pour le filtrage et le tri du tableau***** */
    filtrerDemandes(filtre: string){
      this.recupTable(); // TODO : Bizarre, semble ne pas fonctionner... obligé d'utiliser un service ?
      console.log(this.tableData);
      //On parcours la table en decroissance pour eviter l auto modification des index
       for (var i=this.tableData.length -1; i>=0; i--){         
         if(filtre == 'affectee' && this.tableData[i].dateAffectation == undefined){           
           this.tableData.splice(i, 1);           
         } else if (filtre == 'nonAffectee' && this.tableData[i].dateAffectation != undefined){           
           this.tableData.splice(i, 1);   
         } else if (filtre == 'enCours' && this.tableData[i].statut != 'en cours') {
           this.tableData.splice(i, 1);
         } else if (filtre == 'traitee' && this.tableData[i].statut != 'traitée') {
           this.tableData.splice(i, 1);
         }
       }
    }

    trierDateDemande(){
      this.trierDate('demande', this.trieCroissantDemande);
      this.trieCroissantDemande = !this.trieCroissantDemande;
    }

    trierDateAffectation(){
      this.trierDate('affectation', this.trieCroissantAffectation);
      this.trieCroissantAffectation = !this.trieCroissantAffectation;
    }

    trierDate(typeDate : string, isCroissant: boolean){
      var tableTemp = [];
      for (var i=0; i<this.tableData.length; i++){ 
        if(typeDate == 'demande') {  // pour la performance : sortir le if de la boucle
          tableTemp[i] = [this.dateStringify(this.tableData[i].date), this.tableData[i].coordonnees.email]; // à modifier pour dates d'affectation
        } else if(typeDate == 'affectation') {
          tableTemp[i] = [this.dateStringify(this.tableData[i].dateAffectation), this.tableData[i].coordonnees.email];
        }
      }
      if(isCroissant){
        tableTemp.sort();
      } else {
        tableTemp.sort((a , b) =>  a < b ? 1 : -1);
      }
      for(var i = 0 ; i <tableTemp.length; i++){
        for (var j=0; j<this.tableData.length; j++){ 
          if(tableTemp[i][1] === this.tableData[j].coordonnees.email) {        
             tableTemp[i] = this.tableData[j];
             break;
           }
         }
      }
      this.tableData = tableTemp;
    }

    dateStringify(date : Date){
      if(date == undefined){
        return '00000000';
      }

      var month = date.getMonth() < 10 ? '0' + date.getMonth() : '' + date.getMonth();
      var day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
      console.log('' + date.getFullYear() + month + day);
      return '' + date.getFullYear() + month + day;
    }

}
