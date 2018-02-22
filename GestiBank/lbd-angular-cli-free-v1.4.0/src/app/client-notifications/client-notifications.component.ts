import { Component, OnInit } from '@angular/core';
import { Notification, Utilisateur } from '../data-model';
import { NotificationService } from '../notification-service';
import { Subscription } from 'rxjs/Subscription';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { CLIENT } from '../classes/FAKES';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@Component({
  selector: 'app-client-notifications',
  templateUrl: './client-notifications.component.html',
  styleUrls: ['./client-notifications.component.scss'],
  providers: [NotificationService]
})
export class ClientNotificationsComponent implements OnInit {

	clientID : number = 1; //Bouchon

	notifications : Notification[] = [];

	unreadNotifications : number = 0;

  constructor(private notificationService : NotificationService) { }

  ngOnInit() {
  	let user : Utilisateur = JSON.parse(localStorage.getItem('user'));
    this.clientID = user.id;
  	this.refreshNotifications();
  }

	//Récupérer la liste des notifications
	refreshNotifications() {
		this.notifications = [];
		let sub : Subscription = this.notificationService.getNotificationsByClient(this.clientID).subscribe(notifications => {	
			this.notifications = notifications;
			this.unreadNotifications = this.notifications.filter(notif => !notif.toggled).length;
		});
	}

	updateNotificationRead(notif : Notification){
		if (!notif.toggled){
			notif.toggled = true;					
			this.notificationService.update(this.clientID, notif).subscribe();
			this.unreadNotifications = this.notifications.filter(notif => !notif.toggled).length		
		}
	}
	
	deleteNotification(notif : Notification){
		this.notificationService.deleteNotification(this.clientID, notif).subscribe(res => { 
			this.refreshNotifications();
		});		
	}
}