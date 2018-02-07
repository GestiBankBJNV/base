import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller-service';
import { DatePipe } from '@angular/common';
import { Conseiller, Client, Demande } from '../data-model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-conseiller-accueil',
  templateUrl: './conseiller-accueil.component.html',
  styleUrls: ['./conseiller-accueil.component.scss'],
  providers:[ConseillerService]
})

export class ConseillerAccueilComponent implements OnInit {

	clients: Client[];// récuperation des clients
  demandes: Demande[]; //récuperation des demandes par client
  nomDemande: String;//recuperation du nom de la demande
  indexClient: number;//recuperation de l'index du client
  idSelectionne: number = null;//initialisation du selectionneur sur false = aucun client selectionné
  isDetailDemande: boolean = false;//initialisation de la vue des demande sur false

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {

  	this.clients = this.conseillerService.getListeClientsFromConseiller("0002");

  }

  voirDemande(c: Client, indexC: number){

    //si l'id cliqué est différent de l'ancien id et qu'il y a
    //au moins une demande le tableau des demandes clients s'ouvrent
    if (c.id != this.idSelectionne && c.demandes.length != 0) {
      this.isDetailDemande = true;
      this.demandes = c.demandes;
      this.nomDemande = c.nom;
      this.idSelectionne = c.id;
      this.indexClient = indexC;
    }else{// on réinitialise les varaibles lors de la fermeture du tableau
      this.isDetailDemande = false;  
      this.idSelectionne = null;
      this.indexClient = null;
      
    }

  }

  //validation d'une demande
  demandeTraite(d: Demande){

    //recupération de l'index de la liste des demandes
    let indexToRemove = this.demandes.indexOf(d);

    //remove de la demande en recupérant l'indice du client et l'indice de la demande
    //quand le conseiller valide la demande
    this.clients[this.indexClient].demandes.splice(indexToRemove, 1);

    //si le client n'a plus de demande après la validation d'une demande
    //on réinitilise le tableau pour le fermer.
    if (this.demandes.length === 0) {
      this.isDetailDemande = false;
      this.idSelectionne = null;
      this.indexClient = null;
    }
  }

  //fermeture d'une demande sans la supprimer 
  //A vérifier si on a le droit de supprimer une demande client
  fermerfenetre(){
      this.isDetailDemande = false;
      this.idSelectionne = null;
      this.indexClient = null;
  }

}
