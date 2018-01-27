import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Conseiller, conseillers } from './data-model';

@Injectable()
export class ConseillerService { // Correspond finalement aux méthodes de l'admin, mais je ne vais pas modifier le nom maintenant...

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getConseillers(): Observable<Conseiller[]> {
  	console.log('getConseiller()');
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
      if(conseillers[i].nom.match(nom)) {
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

  // TODO : Majuscules pour comparer sans pb de casse
  getConseillersByNameAndID(name: string, id: string) { // A améliorer pour éviter copié/collé
    var temp=[];
    name = name.toUpperCase();
    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].nom.toUpperCase().match(name) || conseillers[i].matricule === id) {
         temp.push(conseillers[i]);         
      }
    }
    return of(temp).delay(this.delayMs);
  }

  addConseiller(conseiller: Conseiller) {
    // TODO : changer matricule
    conseillers.push(conseiller);    
  }

  deleteConseiller(conseiller: Conseiller) {
    conseillers.splice(conseillers.indexOf(conseiller), 1);
  }
}