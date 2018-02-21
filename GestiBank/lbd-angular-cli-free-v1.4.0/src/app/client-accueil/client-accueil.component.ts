import { Component, OnInit } from '@angular/core';
import { Notification } from '../data-model';
import { NotificationService } from '../notification-service';
import { CompteService } from '../compte-service';
import { Compte, CompteEpargne } from '../data-model';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.scss'],
  providers: [CompteService, NotificationService]
})
export class ClientAccueilComponent implements OnInit {
  
  clientID : number = 2;//Bouchon

  notifications : Notification[] = [];
  comptes : Compte[] = [];
  comptesEpargne : CompteEpargne[] = [];

  constructor(private compteService : CompteService, private notificationService : NotificationService) {}

  ngOnInit() {
    this.refreshUnreadNotifications();
    this.refreshAccounts();
  }

  //Récupérer la liste des notifications
  refreshUnreadNotifications() {
    this.notifications = [];
    this.notificationService.getNotificationsByClient(this.clientID).subscribe(notifications => {  
      this.notifications = notifications.filter(notif => !notif.toggled);
    });
  }

  //Rafraichir la liste de comptes
  refreshAccounts(){
    this.comptes = [];
    this.compteService.getComptesCourantByClient("" + this.clientID).subscribe(comptes => {  
      this.comptes = comptes;
    });
    this.comptesEpargne = [];
    this.compteService.getComptesEpargneByClient("" + this.clientID).subscribe(comptes => {  
      this.comptesEpargne = comptes;
    });    
  }
}
