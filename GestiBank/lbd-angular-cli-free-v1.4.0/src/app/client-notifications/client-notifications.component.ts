import { Component, OnInit } from '@angular/core';
import { Notification } from '../classes/notification';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { CLIENT } from '../classes/FAKES';


@Component({
  selector: 'app-client-notifications',
  templateUrl: './client-notifications.component.html',
  styleUrls: ['./client-notifications.component.scss']
})
export class ClientNotificationsComponent implements OnInit {

	client : Client = CLIENT;
  constructor() { }

  ngOnInit() {
  }

	//Récupérer la liste des notifications non lues
	getUnreadNotifications() : Notification[] {
    	return this.client.notifications.filter(notif => !notif.isRead);
	}

	//Nombres de notifications non lues
	getUnreadNotificationsCount() {
		return this.getUnreadNotifications().length;
	}

	deleteNotification(notif : Notification){
		console.log("Delete notification");
	}

}
