import { Component, OnInit } from '@angular/core';
import { Notification } from '../data-model';
import { NotificationService } from '../notification-service';
import { CompteService } from '../compte-service';
import { Compte } from '../data-model';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.scss'],
  providers: [CompteService, NotificationService]
})
export class ClientAccueilComponent implements OnInit {
  
  notifications : Notification[] = [];
  comptes : Compte[] = [];
  constructor(private compteService : CompteService, private notificationService : NotificationService) {}

  ngOnInit() {
    this.refreshUnreadNotifications();
    this.refreshAccounts();
  }

  //Récupérer la liste des notifications
  refreshUnreadNotifications() {
    this.notifications = [];
    this.notificationService.getNotificationsByClient(1).subscribe(notifications => {  
      this.notifications = notifications.filter(notif => !notif.read);
    });
  }

  //Rafraichir la liste de comptes
  refreshAccounts(){
    this.comptes = [];
    this.compteService.getComptesByClient("1").subscribe(comptes => {  
      this.comptes = comptes;
    });
  }
}
