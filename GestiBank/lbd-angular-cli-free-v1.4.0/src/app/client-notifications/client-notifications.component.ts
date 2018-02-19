import { Component, OnInit } from '@angular/core';
import { Notification } from '../data-model';
import { NotificationService } from '../notification-service';
import { Subscription } from 'rxjs/Subscription';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { CLIENT } from '../classes/FAKES';


@Component({
  selector: 'app-client-notifications',
  templateUrl: './client-notifications.component.html',
  styleUrls: ['./client-notifications.component.scss'],
  providers: [NotificationService]
})
export class ClientNotificationsComponent implements OnInit {

	client : Client = CLIENT;

	notifications : Notification[] = [];

	unreadNotifications : number = 0;

  constructor(private notificationService : NotificationService) { }

  ngOnInit() {
  	this.refreshNotifications();
  }

	//Récupérer la liste des notifications
	refreshNotifications() {
		this.notifications = [];
		let sub : Subscription = this.notificationService.getNotificationsByClient(1).subscribe(notifications => {	
			this.notifications = notifications;
			this.unreadNotifications = this.notifications.filter(notif => !notif.read).length;
		});
	}

	updateNotificationRead(notif : Notification){
		if (!notif.read){
			notif.read = true;		
			this.notificationService.update(notif).subscribe();		
		}
	}
	
	deleteNotification(notif : Notification){
		this.notificationService.deleteNotification(notif).subscribe(res => { 
			this.refreshNotifications();
		});		
	}
}