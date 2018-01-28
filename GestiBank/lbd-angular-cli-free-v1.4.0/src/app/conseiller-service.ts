import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Conseiller, conseillers, Client } from './data-model';

@Injectable()
export class ConseillerService { // Correspond finalement aux méthodes de l'admin, mais je ne vais pas modifier le nom maintenant...

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getConseillers(): Observable<Conseiller[]> {
    return of(conseillers).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateConseiller(conseiller: Conseiller): Observable<Conseiller>  {
  	/*console.log('updateConseiller()');*/
    const oldConseiller = conseillers.find(c => c.matricule === conseiller.matricule);
    const newConseiller = Object.assign(oldConseiller, conseiller); // Demo: mutate cached hero
    return of(newConseiller).delay(this.delayMs); // simulate latency with delay
  }

  getConseillersByName(nom: string): Observable<Conseiller[]> {
    var temp=[];

    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].nom.startsWith(nom, 0)) {
         temp.push(conseillers[i]);
         /*console.log('conseillers trouvé : ' + conseillers[i].nom);*/
      }
    }
    return of(temp).delay(this.delayMs);
  }

  getConseillersByID(id: string): Observable<Conseiller[]> {
    
    var temp=[];

    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].matricule.match(id)) {
         temp.push(conseillers[i]);
      }
    }
    return of(temp).delay(this.delayMs);
  }

  getConseillersByNameAndID(name: string, id: string) { // A améliorer pour éviter copié/collé
    var temp=[];
    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].nom.toUpperCase().startsWith(name.toUpperCase(), 0) || conseillers[i].matricule === id) {
         temp.push(conseillers[i]);         
      }
    }
    return of(temp).delay(this.delayMs);
  }

  getConseillerWithClient(client: Client){
    for(var i=0; i<conseillers.length; i++){
      for(var j=0; j<conseillers[i].clients.length; j++){
        if(conseillers[i].clients[j] == client){
          return conseillers[i];
        }
      }
    }
    return undefined;
  }

  deleteClient(client: Client){
    var conseiller = this.getConseillerWithClient(client);
    var clients = conseiller.clients;
    clients.splice(clients.indexOf(client), 1);
    conseiller.clients = clients;
  }

  addConseiller(conseiller: Conseiller) {
    // TODO : changer matricule
    conseillers.push(conseiller);    
  }

  deleteConseiller(conseiller: Conseiller) {
    conseillers.splice(conseillers.indexOf(conseiller), 1);
  }
}