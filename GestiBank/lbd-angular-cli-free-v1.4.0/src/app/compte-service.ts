import { Injectable } from '@angular/core';
import { Compte, Operation } from './data-model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompteService{
	private apiUrl = "http://localhost:8080/GestiBankBrijanavi/";

	constructor(private http : Http) {}

	//Renvoie une liste de taux de conversion. base = EUR par défaut
	getComptesByClient(clientID : string) : Observable<Compte[]>{
		return this.http.get(this.apiUrl + "comptes/" + clientID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	getCompteByID(compteID : number) : Observable<Compte> {
		return this.http.get(this.apiUrl + "compte/" + compteID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	getCompteOperations(compteID : number) : Observable<Operation>{
		return this.http.get(this.apiUrl + "operations/" + compteID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}
}