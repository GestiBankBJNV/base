import { Injectable } from '@angular/core';
import { Compte } from './data-model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompteService{
	private apiUrl = "http://localhost:8080/Brijanavi";

	constructor(private http : Http) {}

	//Renvoie une liste de taux de conversion. base = EUR par défaut
	getConversionRates(base : string) : Observable<Compte>{
		return this.http.get(this.apiUrl + "?base=" + base)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}
}