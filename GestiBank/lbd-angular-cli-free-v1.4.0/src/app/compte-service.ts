import { Injectable } from '@angular/core';
import { Compte, Operation } from './data-model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompteService{
	private apiUrl = "http://localhost:8080/GestiBankBrijanavi/comptes";

	constructor(private http : Http) {}

	//Renvoie une liste de taux de conversion. base = EUR par défaut
	getComptesByClient(clientID : string) : Observable<Compte[]>{
		return this.http.get(this.apiUrl + "/client/" + clientID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	getCompteByID(compteID : number) : Observable<Compte> {
		return this.http.get(this.apiUrl + "/" + compteID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	getCompteOperations(compteId : number) : Observable<Operation[]>{
		return this.http.get(this.apiUrl + "/operations/" + compteId)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}
}