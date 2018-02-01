import { Component, OnInit } from '@angular/core';
import { TablesComponent } from '../tables/tables.component'
import { Conseiller, Client, DemandeInscription} from '../data-model';
import { ConseillerService } from '../conseiller-service';
import { ClientService } from '../client-service';
import { DemandeService } from '../demande-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { NotificationsComponent } from '../notifications/notifications.component';
import { FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';


@Component({
  selector: 'app-admin-affectations',
  templateUrl: './admin-affectations.component.html',
  styleUrls: ['./admin-affectations.component.scss']
})

export class AdminAffectationsComponent implements OnInit {

	//public tableData = []; // tableau contenant les demandes d'inscription
	private affecter: boolean = false; // booléen pour indiquer à l'html que l'on veut afficher la div des affectations
  private trieCroissantDemande : boolean = true; // booléen pour indiquer à l'html que l'on veut trier par ordre croissant ou décroissant les dates de demande
  private trieCroissantAffectation : boolean = true; // booléen pour indiquer à l'html que l'on veut trier par ordre croissant ou décroissant les dates d'affectation

  notif: NotificationsComponent = new NotificationsComponent(); // Notification qui s'affiche quand on clique sur certains boutons
  conseillers: Observable<Conseiller[]>; // pour récupérer la liste des conseillers afin de leur affecter des clients
  demandes: Observable<DemandeInscription[]>;
  clients: Observable<Client[]>;
  isLoading = false; // simulation de latence
  isLoadingClient = false; // pour les clients dans l'onglet modif
  isSearching = false; // quand on affiche une liste de conseillers après avoir chercher dans une input text
  conseillerRecherche: string = ''; // garder sous la main le conseiller recherché
  clientRecherche: string = ''; // garder sous la main le client recherché
  selectedDemande: DemandeInscription; // garder sous la main la demande que l'on va affecter à un conseiller
  selectedClient: Client; // Pour l'onglet modifs
  selectedConseiller: Conseiller; // Pour l'onglet modifs

  conseillersDataSource:  Observable<Conseiller>;
  clientsDataSource:  Observable<Client>;


	constructor(private demandeService: DemandeService, private conseillerService: ConseillerService, private clientService: ClientService) { 
    this.constructorSelect();
  }

	ngOnInit() {
	  this.getDemandes();   
	}

  getDemandes() { // récupère tous les conseillers via le service
    this.isLoading = true;
    this.demandes = this.demandeService.getDemandesInscription()
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  getConseillers() { // récupère tous les conseillers via le service
    this.isLoading = true;
    this.conseillers = this.conseillerService.getConseillers()
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  getClient() { // récupère tous les conseillers via le service
    this.isLoadingClient = true;
    this.clients = this.clientService.getClients() 
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
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
    this.demandeService.updateDemandeInscription(this.selectedDemande).subscribe();
    // Ajouter la demande à la liste du conseiller
    conseiller.demandes.push(this.selectedDemande);
    this.conseillerService.updateConseiller(conseiller).subscribe();  
    // Notifier l'affectation
    this.notif.showNotificationMessage('top', 'right', 'Demande affectée au conseiller : ' + conseiller.prenom + ' ' + conseiller.nom, 'success', 'pe-7s-magic-wand');
    
  } 

  clicRechercherClient() {
    this.getClient(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                           /* il n'y en a pas beaucoup donc c'est pas si grave, après ce code changera pour chercher les infos dans une BDD de toute façon */
    this.isLoadingClient = true;
    this.clients = this.clientService.getClientByNameAndID(this.clientRecherche, this.clientRecherche) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
  }

  clicRechercherConseiller() { // Méthode utilisée pour assurer la saisie du conseiller auquel affecter la demande
    this.isLoading = true;  
    this.isSearching = true;
    this.getConseillers(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                           /* il n'y en a pas beaucoup donc c'est pas si grave, après ce code changera pour chercher les infos dans une BDD de toute façon */
    this.isLoading = true;
    this.conseillers = this.conseillerService.getConseillersByNameAndID(this.conseillerRecherche, this.conseillerRecherche) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  /* ***** Méthodes pour le filtrage et le tri du tableau ***** */
  filtrerDemandes(filtre: string){      
    this.getDemandes(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                           /* il n'y en a pas beaucoup donc c'est pas si grave */
    this.isLoading = true;
    this.demandes = this.demandeService.filtrerDemandes(filtre) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
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
    this.getDemandes(); /* Récupérer tous les conseillers : à modifier pour le faire seulement dans le init */
                           /* il n'y en a pas beaucoup donc c'est pas si grave */
    this.isLoading = true;
    this.demandes = this.demandeService.trierDate(typeDate, isCroissant) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  /* ***** Méthode au changement d'onglet ***** */
  changerOnglet(onglet: string){ // on réinitialise tous les attributs nécessaires

    this.getConseillers();
    this.getClient();
    this.affecter = false; 
    this.trieCroissantDemande = true; 
    this.trieCroissantAffectation = true;  
    this.conseillerRecherche = ''; 
    this.clientRecherche = ''; 
    this.selectedDemande = undefined; 
    this.isLoading = false;
    this.isLoadingClient = false;
    this.isSearching = false;

  }

  /* ***** Affectation du client au conseiller (onglet modif) ***** */
  validerModifConseiller(){ // TODO : vérifier (semble ne pas fonctionner --> tests)
    console.log(this.selectedClient.nom);
    console.log(this.selectedConseiller.nom);
    debugger;
    // Ajouter le client à la liste du conseiller
    this.selectedConseiller.clients.push(this.selectedClient);
    this.conseillerService.updateConseiller(this.selectedConseiller).subscribe();  
    // Supprimer le client de la liste de son ancien conseiller
    this.conseillerService.deleteClient(this.selectedClient);
    // Notifier les modifs
    this.notif.showNotificationMessage('top', 'right', 'Client : ' + this.selectedClient.prenom + ' ' + this.selectedClient.nom + ' affecté au conseiller : ' + this.selectedConseiller.prenom + ' ' + this.selectedConseiller.nom, 'success', 'pe-7s-magic-wand');
  }
/**********************************************************************************************************************************************/

  // Formulaire de l'onglet modifications
  modifCtrlClient: FormControl = new FormControl();
  modifCtrlConseiller: FormControl = new FormControl();
 
  modifForm: FormGroup = new FormGroup({
    client: this.modifCtrlClient,
    conseiller: this.modifCtrlConseiller
  });

  constructorSelect() {
    //this.clicRechercherConseiller();
    this.conseillersDataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.conseillerRecherche);
    }).mergeMap((token: string) => this.conseillerService.getConseillersByNameAndID(token, token));

    this.clientsDataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.clientRecherche);
    }).mergeMap((token: string) => this.clientService.getClientByNameAndID(token, token));
  }
 
 
 /* changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
 
  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }*/
 
  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.item);
    this.selectedConseiller = e.item;
  }

  typeaheadOnSelectClient(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.item);
    this.selectedClient = e.item;
  }
}


