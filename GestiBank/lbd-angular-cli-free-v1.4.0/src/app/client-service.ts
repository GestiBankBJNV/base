import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Client, clients } from './data-model';

@Injectable()
export class ClientService {

	delayMs = 500;

    // Fake server get; assume nothing can go wrong
    getConseillers(): Observable<Client[]> {
	  	console.log('getConseiller()');
	    return of(clients).delay(this.delayMs); // simulate latency with delay
    }

    // Fake server update; assume nothing can go wrong
  updateConseiller(client: Client): Observable<Client>  {
  	/*console.log('updateConseiller()');*/
    const oldClient = clients.find(c => c.id === client.id);
    const newClient = Object.assign(oldClient, client); // Demo: mutate cached hero
    return of(newClient).delay(this.delayMs); // simulate latency with delay
  }
}
