import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Conseiller, conseillers, Client, DemandeInscription } from './data-model';

@Injectable()
export class ConseillerService { // Correspond finalement aux méthodes de l'admin, mais je ne vais pas modifier le nom maintenant...

  delayMs = 500;

  constructor(private http : Http) {}

  getConseillers() : Observable<Conseiller[]>{
    return this.http.get("http://localhost:8080/GestiBankBrijanavi/conseillers")
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Error'));
  }

  getConseillersByNameOrMatricule(recherche : string){
    return this.http.get("http://localhost:8080/GestiBankBrijanavi/conseillers/" + recherche)
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Error'));
  }

  updateConseiller(conseiller: Conseiller): Observable<Conseiller>  {
    return this.http.put("http://localhost:8080/GestiBankBrijanavi/conseillers", conseiller)
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Error'));
  }

   getConseillersByIdSimple(id: string): Conseiller{
    var temp: Conseiller;

    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].matricule === id) {
         temp = conseillers[i];
         break;
         /*console.log('conseillers trouvé : ' + conseillers[i].nom);*/
      }
    }
    return temp;
  }

  /*getListeClientsFromConseiller(id : string){
    let conseiller: Conseiller = this.getConseillersByIdSimple(id);
    return conseiller.clients;    
  }*/

  getListeClientsFromConseiller(matricule : string): Observable<Client[]>{
    return this.http.get("http://localhost:8080/GestiBankBrijanavi/conseillers/" + matricule + "/clients")
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Error'));   
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
    conseiller.matricule = ((conseiller.dateDebutContrat.getMonth() + 1) < 10 ? 
                                "0" + (conseiller.dateDebutContrat.getMonth() + 1) : (conseiller.dateDebutContrat.getMonth() + 1))
                            + (Math.random()*1000).toFixed(0)
                            + conseiller.prenom.charAt(0).toUpperCase() 
                            + conseiller.nom.charAt(0).toUpperCase();
    conseillers.push(conseiller);    
  }

  deleteConseiller(conseiller: Conseiller) {
    conseillers.splice(conseillers.indexOf(conseiller), 1);
  }

  getClientFromConseiller(conseiller: Conseiller){
  }

  getListDemandeInscriptionByConseiller(id: string){

    let conseiller: Conseiller = this.getConseillersByIdSimple(id);

    let demandes: DemandeInscription[] = conseiller.demandesInscription;

    return demandes;

  }


  /* ***************** Ancien Code ***************** */
  // Fake server get; assume nothing can go wrong
 /* getConseillers(): Observable<Conseiller[]> {
    return of(conseillers).delay(this.delayMs); // simulate latency with delay
  }*/

  /*getConseillersByNameAndID(name: string, id: string) { // A améliorer pour éviter copié/collé
    var temp=[];
    for(var i=0; i<conseillers.length; i++){
      // mettre dans temp les conseillers ayant le nom recherché
      if(conseillers[i].nom.toUpperCase().startsWith(name.toUpperCase(), 0) || conseillers[i].matricule === id) {
         temp.push(conseillers[i]);         
      }
    }
    return of(temp).delay(this.delayMs);
  }*/

  // Fake server update; assume nothing can go wrong
  /*updateConseiller(conseiller: Conseiller): Observable<Conseiller>  {
    const oldConseiller = conseillers.find(c => c.matricule === conseiller.matricule);
    const newConseiller = Object.assign(oldConseiller, conseiller); // Demo: mutate cached hero
    return of(newConseiller).delay(this.delayMs); // simulate latency with delay
  }*/
}