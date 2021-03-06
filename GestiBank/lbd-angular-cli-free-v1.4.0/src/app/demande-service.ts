import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Conseiller, DemandeClient, DemandeModif, DemandeInscription, demandesInscription } from './data-model';

/* ******** Gestion des demandes d'inscription ******** */

@Injectable()
export class DemandeService {

	delayMs = 500;

	headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
  	options = new RequestOptions({ headers: this.headers });

    apiUrl : string = "http://localhost:8080/GestiBankBrijanavi/demandes";

	constructor(private http : Http) {}

	getDemandesInscription(): Observable<DemandeInscription[]> {
  	return this.http.get(this.apiUrl + "/inscriptions")
  	.map((res : Response) => res.json())
  	.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	updateDemandeInscription(demande: DemandeInscription) {
    return this.http.put(this.apiUrl + "/inscriptions", demande, this.options)
  	.map((res : Response) => res.json())
  	.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

  sendDemandeClient(clientID : number, demande : DemandeClient){
    return this.http.post(this.apiUrl + "/client/" + clientID, demande)
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  } 

  sendDemandeModif(clientID : number, demande : DemandeModif) {
    return this.http.post(this.apiUrl + "/modif/" + clientID, demande)
    .map((res : Response) => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }  


  addDemandeInscription(demande: DemandeInscription){
    return this.http.post("http://localhost:8080/GestiBankBrijanavi/demandes/inscriptions", demande, this.options)
    .catch((error : any) => Observable.throw(error.json().error || 'Error'));
  }


  /* ***************** Ancien Code ***************** */
    // Fake server get; assume nothing can go wrong
	/*getDemandesInscription(): Observable<DemandeInscription[]> {
  	return of(demandesInscription).delay(this.delayMs); // simulate latency with delay
	}*/

	// Fake server update; assume nothing can go wrong
	/*updateDemandeInscription(demande: DemandeInscription): Observable<DemandeInscription>  {
    const oldDemande = demandesInscription.find(d => d.id === demande.id);
    const newDemande = Object.assign(oldDemande, demande); // Demo: mutate cached hero
    return of(newDemande).delay(this.delayMs); // simulate latency with delay
  }*/

  /*filtrerDemandes(filtre: string){
      //On parcours la table en decroissance pour eviter l auto modification des index
  var temp = [];
  for(var i=0; i<demandesInscription.length; i++){          
         temp.push(demandesInscription[i]);
      } // plutôt que de copier le tableau, on pourrait utiliser un push, mais il faudrait repenser aux conditions  

       for (var i=demandesInscription.length -1; i>=0; i--){         
         if(filtre == 'affectee' && demandesInscription[i].dateAffectation == undefined){           
             temp.splice(i, 1);           
         } else if (filtre == 'nonAffectee' && demandesInscription[i].dateAffectation != undefined){         
             temp.splice(i, 1);   
         } else if (filtre == 'enCours' && demandesInscription[i].statut != 'en cours') {
             temp.splice(i, 1);
         } else if (filtre == 'traitee' && demandesInscription[i].statut != 'traitée') {
             temp.splice(i, 1);
         }
      }
       return of(temp).delay(this.delayMs); // simulate latency with delay
  }*/


  /*trierDate(typeDate : string, isCroissant: boolean){
    var tableTemp = [];
    for (var i=0; i<demandesInscription.length; i++){ 
        if(typeDate == 'demande') { 
          tableTemp[i] = [this.dateStringify(demandesInscription[i].dateInscription), demandesInscription[i].id];
        } else if(typeDate == 'affectation') {
          tableTemp[i] = [this.dateStringify(demandesInscription[i].dateAffectation), demandesInscription[i].id];
        }
    }

    if(isCroissant){
        tableTemp.sort();
    } else {
        tableTemp.sort((a , b) =>  a < b ? 1 : -1);
    }

    for(var i = 0 ; i <tableTemp.length; i++){
        for (var j=0; j<demandesInscription.length; j++){ 
          if(tableTemp[i][1] === demandesInscription[j].id) {        
             tableTemp[i] = demandesInscription[j];
             break;
           }
         }
    }
    return of(tableTemp).delay(this.delayMs); // simulate latency with delay
  }
  */

  /*
  dateStringify(date : Date){
      if(date == undefined){
        return '00000000';
      }

      var month = date.getMonth() < 10 ? '0' + date.getMonth() : '' + date.getMonth();
      var day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
      console.log('' + date.getFullYear() + month + day);
      return '' + date.getFullYear() + month + day;
  }*/
}
