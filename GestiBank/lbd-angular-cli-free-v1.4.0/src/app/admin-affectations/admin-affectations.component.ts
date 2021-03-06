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
import { TranslateService } from '@ngx-translate/core';


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
  derouler: boolean = true; // Pour l'accordion
  orderColumn = "id";
  filtre = ['id'];
  filterArg: string;

/* traduction https://stackoverflow.com/questions/45870513/angular-ngx-translate-usage-in-typescript*/
	constructor(private demandeService: DemandeService, private conseillerService: ConseillerService, private clientService: ClientService, private translate: TranslateService) { 
    this.constructorSelect();
    this.getDemandes(); 
  }

	ngOnInit() {
	  this.getDemandes();           
	}

  /* Récuperation de toutes les demandes via le service */
  getDemandes() {
    this.isLoading = true;
    this.demandes = this.demandeService.getDemandesInscription()
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  /* Récuperation de tous les conseillers via le service */
  getConseillers() {
    this.isLoading = true;
    this.conseillers = this.conseillerService.getConseillers()
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  /* Récuperation de tous les clients via le service */
  getClient() { 
    this.isLoadingClient = true;
    this.clients = this.clientService.getClients() 
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
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

  /**********************************************************************************************************************************************/
  /* ONGLET AFFECTATIONS */

  /* méthode utilisée au clic du bouton affecter dans le tableau */
  affect(demande: DemandeInscription) { 
    this.affecter = true;
    this.selectedDemande = demande;
    this.derouler = false;
  }

  /* Méthode utilisée au clic sur le nom d'un conseiller et validation du choix */
  select(/*conseiller: Conseiller*/) { 
    if(this.selectedConseiller) {
      this.affecter = false;
      this.isSearching = false;
      // Modifier le statut et la date d'affectation
      this.selectedDemande.dateAffectation = new Date();
      this.selectedDemande.statut = "en cours";
      this.demandeService.updateDemandeInscription(this.selectedDemande).subscribe();
      // Ajouter la demande à la liste du conseiller
      this.selectedConseiller.demandesInscription.push(this.selectedDemande);
      this.conseillerService.updateConseiller(this.selectedConseiller).subscribe();  
      // Notifier l'affectation
      let note: string;
      this.translate.get('admin_affectation_notif_demande_affectee').subscribe(res => { note = res });
      this.notif.showNotificationMessage('top', 'right', /*'Demande affectée au conseiller : '*/note + this.selectedConseiller.prenom + ' ' + this.selectedConseiller.nom, 'success', 'pe-7s-magic-wand');
      // Effacer la selection
      this.selectedConseiller = undefined;
      // Réafficher le tableau des demandes
      this.derouler = true;
    } else {
      let note: string;
      this.translate.get('admin_affectation_erreur_no_conseiller').subscribe(res => { note = res });
      this.notif.showNotificationMessage('top', 'right', /*'Erreur : veuillez entrer un conseiller'*/note, 'danger', 'pe-7s-magic-wand'); 
    }    
  } 

  /* Méthode utilisée à la validation de la recherche par nom/id du conseiller */
  clicRechercherConseiller() { 
    this.isLoading = true;  
    this.isSearching = true;
    this.getConseillers(); // Récupérer tous les conseillers
    this.conseillers = this.conseillerService.getConseillersByNameOrMatricule(this.conseillerRecherche) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }

  /* ***** Méthodes pour le filtrage et le tri du tableau ***** */

  /* Méthode de filtrage */
  filtrerDemandes(filtre: string, filterArg: string){
    this.filtre = [filtre];      
    this.filterArg = filterArg;
  }

  /* Méthode appelée lors du clic sur l'entete du tableau "Date de demande" */
  trierDateDemande(){
    //this.trierDate('demande', this.trieCroissantDemande); // ancien code
    this.orderColumn = (this.trieCroissantDemande ? "":"-") + "dateInscription";
    this.trieCroissantDemande = !this.trieCroissantDemande;
  }

  /* Méthode appelée lors du clic sur l'entete du tableau "Date d'affectation" */
  trierDateAffectation(){
    //this.trierDate('affectation', this.trieCroissantAffectation); // ancien code
    this.orderColumn = (this.trieCroissantAffectation ? "":"-") + "dateAffectation";
    this.trieCroissantAffectation = !this.trieCroissantAffectation;
  }

  /**********************************************************************************************************************************************/
  /* ONGLET MODIFICATIONS */

  /* cf: https://valor-software.com/ngx-bootstrap/#/typeahead*/

  /* Observables utilisés dans cet onglet */
  conseillersDataSource:  Observable<Conseiller>; // J'utilise d'autres Observables parce que je ne veux pas modifier tout ce que j'ai déjà fait...
  clientsDataSource:  Observable<Client>;

  /* Formulaire de l'onglet modifications */
  modifCtrlClient: FormControl = new FormControl();
  modifCtrlConseiller: FormControl = new FormControl();
 
  modifForm: FormGroup = new FormGroup({
    client: this.modifCtrlClient,
    conseiller: this.modifCtrlConseiller
  });

  /* Méthode utilisée dans le constructeur pour créer les observables que l'on utilise pour récupérer les clients et les conseillers */
  constructorSelect() {
    this.conseillersDataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.conseillerRecherche);
    }).mergeMap((token: string) => this.conseillerService.getConseillersByNameOrMatricule(token));

    this.clientsDataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.clientRecherche);
    }).mergeMap((token: string) => this.clientService.getClientByNameOrId(token));
  }
 
  /* Méthode utilisée lors du clic sur un conseiller */
  typeaheadOnSelectConseiller(e: TypeaheadMatch): void { 
    this.selectedConseiller = e.item;
  }

  /* Méthode utilisée lors du clic sur un client */
  typeaheadOnSelectClient(e: TypeaheadMatch): void {
    this.selectedClient = e.item;
  }

  /* Affectation du client au conseiller, au clic sur le bouton 'Valider' */
  validerModifConseiller(){ 
    // Ajouter le client à la liste du conseiller
    //this.selectedConseiller.clients.push(this.selectedClient);
    //this.conseillerService.updateConseiller(this.selectedConseiller).subscribe();  
    // Supprimer le client de la liste de son ancien conseiller
    //this.conseillerService.deleteClient(this.selectedClient.id).subscribe();

    // On fait autrement
    this.conseillerService.changerConseiller(this.selectedClient, this.selectedConseiller.id).subscribe();

    // Notifier les modifs
    this.notif.showNotificationMessage('top', 'right', 'Client : ' + this.selectedClient.prenom + ' ' + this.selectedClient.nom + ' affecté au conseiller : ' + this.selectedConseiller.prenom + ' ' + this.selectedConseiller.nom, 'success', 'pe-7s-magic-wand');
  }

  /* *********** Ancien code ************* */

  /* Ancienne méthode qui était utilisée pour rechercher le client dont on souhaite modifier l'affectation */
  /*clicRechercherClient() {
    this.getClient(); // Récupérer tous les conseillers
    this.isLoadingClient = true;
    this.clients = this.clientService.getClientByNameAndID(this.clientRecherche, this.clientRecherche) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoadingClient = false);
  }*/

   /* Méthode de filtrage */
  /*  filtrerDemandes(filtre: string){      
    this.getDemandes(); 
    this.isLoading = true;
    this.demandes = this.demandeService.filtrerDemandes(filtre) 
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
    
  }*/

    /* Méthode appelée par les méthodes de tri de dates */
  /*trierDate(typeDate : string, isCroissant: boolean){      
    this.getDemandes(); // Récupérer tous les conseillers : à modifier pour le faire seulement dans le init 
                           // il n'y en a pas beaucoup donc c'est pas si grave 
    this.isLoading = true;
    this.demandes = this.demandeService.trierDate(typeDate, isCroissant) // ce champ contient soit un nom, soit un matricule
                        // Normalement à faire : error handling
                        .finally(() => this.isLoading = false);
  }*/
}


