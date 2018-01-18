import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Conseiller, conseillers } from './data-model';

@Injectable()
export class ConseillerService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getConseillers(): Observable<Conseiller[]> {
    return of(conseillers).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateConseiller(conseiller: Conseiller): Observable<Conseiller>  {
    const oldConseiller = conseillers.find(c => c.id === conseiller.id);
    const newConseiller = Object.assign(oldConseiller, conseiller); // Demo: mutate cached hero
    return of(newConseiller).delay(this.delayMs); // simulate latency with delay
  }

  getConseillersByName(nom: string): Observable<Conseiller[]> {
    //var correspondances: Observable<Conseiller[]>;
    var temp=[];

    for(var i=0; i<conseillers.length; i++){
      // mettre dans correspondance les conseillers ayant le nom recherché
      if(conseillers[i].name.match(nom)) {
         temp.push(conseillers[i]);
      }
    }

    return of(temp).delay(this.delayMs);
  }
}