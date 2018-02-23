import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';
import { ClientService } from '../client-service';
import { DatePipe } from '@angular/common';
import { Conseiller, Client, DemandeClient, Utilisateur, conseillers, DemandeInscription } from '../data-model';
import { Observable } from 'rxjs/Observable';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-conseiller-accueil',
  templateUrl: './conseiller-accueil.component.html',
  styleUrls: ['./conseiller-accueil.component.scss']
})

export class ConseillerAccueilComponent implements OnInit {	

  currentUser: Conseiller = JSON.parse(localStorage.getItem("user"));
	clients: Client[];// récuperation des clients
  vclient: Client[];//récupération des client non prospect
  demandes: DemandeClient[]; //récuperation des demandes par client
  nomDemande: String;//recuperation du nom de la demande
  indexClient: number;//recuperation de l'index du client
  idSelectionne: number = null;//initialisation du selectionneur sur false = aucun client selectionné
  isDetailDemande: boolean = false;//initialisation de la vue des demande sur false
  notif: NotificationsComponent = new NotificationsComponent();

  isLoading = false;

  constructor(private conseillerService: ConseillerService, private clientService: ClientService) { }

  ngOnInit() {
    console.log(this.currentUser.matricule);
    this.isLoading = true;
  	//initiatlisation pour l'affichage dans le tableau des différents clients.
  	//this.clients = this.conseillerService.getListeClientsFromConseiller(this.currentUser.matricule)    
                         // Normalement à faire : error handling
    //                    .finally(() => this.isLoading = false);
    this.conseillerService.getListeClientsFromConseiller(this.currentUser.matricule).subscribe(clients =>{
      this.clients = clients;
      this.vclient = [];
      for(let i=0; i<this.clients.length; i++){
      if(this.clients[i].isClient == true){
        this.vclient.push(this.clients[i])
      }
    }
    });

    

  }

  voirDemande(c: Client){

    //si l'id cliqué est différent de l'ancien id et qu'il y a
    //au moins une demande le tableau des demandes clients s'ouvrent
    if (c.id != this.idSelectionne && c.demandes.length != 0) {
      this.isDetailDemande = true;
      this.clientService.getAllDemandeClientById(c.id).subscribe(demandes => {
        this.isLoading = false;  
      });

      console.log("id du conseiller : "+c.id);
      console.log(this.demandes);
      this.indexClient = c.id;
      this.nomDemande = c.nom;
      this.idSelectionne = c.id;
    }else{// on réinitialise les varaibles lors de la fermeture du tableau
      this.isDetailDemande = false;  
      this.idSelectionne = null;
      //this.indexClient = null;
      
    }

  }

  //validation d'une demande
  demandeTraite(d: DemandeClient){

    //recupération de l'index de la liste des demandes
    //let indexToRemove = this.demandes.

    //remove de la demande en recupérant l'indice du client et l'indice de la demande
    //quand le conseiller valide la demande
    //this.clients[this.indexClient].demandes.splice(indexToRemove, 1);

    //si le client n'a plus de demande après la validation d'une demande
    //on réinitilise le tableau pour le fermer.
    if (this.demandes) {
      this.isDetailDemande = false;
      this.idSelectionne = null;
      //this.indexClient = null;
    }

    this.notif.showNotificationMessage("top", "right", d.libelle +" envoyé", "success", 'pe-7s-magic-wand');
    console.log("id du client ====>"+this.indexClient);
    console.log("id de la demande ===> "+d.id);
  }

  //fermeture d'une demande sans la supprimer 
  //A vérifier si on a le droit de supprimer une demande client
  fermerfenetre(){
      this.isDetailDemande = false;
      this.idSelectionne = null;
      this.indexClient = null;
  }
}
