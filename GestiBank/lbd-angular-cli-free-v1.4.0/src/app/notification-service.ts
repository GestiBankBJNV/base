import { Injectable } from '@angular/core';
import { Notification } from './data-model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService{
	private apiUrl = "http://localhost:8080/GestiBankBrijanavi/notifications";

	constructor(private http : Http) {}

	//Retourne la liste des notifications d'un client
	getNotificationsByClient(clientID : number) : Observable<Notification[]>{
		return this.http.get(this.apiUrl + "/" + clientID)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}


	deleteNotification(notif : Notification) : Observable<Boolean> {
		return this.http.delete(this.apiUrl + "/" + notif.id)
		.map((res : Response) => res.json())
		.catch((error : any) => Observable.throw(error.json().error || 'Error'));
	}

	addNotificationToClient(clientID : number, notification : Notification) : Observable<Notification>{
		return this.http.post(this.apiUrl, notification)
		.catch((error : any) => Observable.throw(error.json().error || 'Server error'));
	}

	update(notification : Notification) : Observable<Boolean> {
		return this.http.put(this.apiUrl, notification)
		.catch((error : any) => Observable.throw(error.json().error || 'Server error'));
	}
}