import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Client, clients } from './data-model';

@Injectable()
export class ClientService {

	delayMs = 500;

    // Fake server get; assume nothing can go wrong
    getClients(): Observable<Client[]> {
	  	console.log('getConseiller()');
	    return of(clients).delay(this.delayMs); // simulate latency with delay
    }

    // Fake server update; assume nothing can go wrong
    updateClient(client: Client): Observable<Client>  {
    	/*console.log('updateConseiller()');*/
      const oldClient = clients.find(c => c.id === client.id);
      const newClient = Object.assign(oldClient, client); // Demo: mutate cached user
      return of(newClient).delay(this.delayMs); // simulate latency with delay
    }

    getClientByNameAndID(name: string, id: string) { // A améliorer pour éviter copié/collé
      var temp=[];
      for(var i=0; i<clients.length; i++){
        // mettre dans temp les conseillers ayant le nom recherché
        if(clients[i].nom.toUpperCase().startsWith(name.toUpperCase(), 0) || clients[i].id.toString() === id) {
           temp.push(clients[i]);         
        }
      }
      return of(temp).delay(this.delayMs);
  }
}
