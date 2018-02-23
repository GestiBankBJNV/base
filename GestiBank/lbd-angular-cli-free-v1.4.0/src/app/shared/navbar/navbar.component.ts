import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NotificationService } from '../../notification-service';
import { CLIENT } from '../../classes/FAKES';
import { Notification, Utilisateur, Client } from '../../data-model';
import {ClientService} from '../../client-service';
import { Router} from '@angular/router';
import { ConseillerService } from "../../conseiller-service";



@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: [ClientService, ConseillerService, NotificationService]
})

export class NavbarComponent implements OnInit{

    //user : any = CLIENT;
    user: Utilisateur = JSON.parse(localStorage.getItem("user"));
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    notifications : Notification[] = []; //Ne contiendra que les notifications non lues.




    constructor(location: Location,  private element: ElementRef, private notificationService : NotificationService, private clientService : ClientService, private conseillerService : ConseillerService, private router: Router) {      

      this.router.events.subscribe(event => this.user = JSON.parse(localStorage.getItem("user")));  
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){      
      //this.refreshNotifications();
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    //Retourne le préfixe de l'url en fonction du type d'utilisateur
    //On teste si les variables existent, pour déterminer le type d'user
    getPrefix(){
      if(this.user){ return this.user.statut; }      
      return "public";
    }

    //Cherche le préfixe de l'url actuelle.
    startsWith(prefix){
      return (this.location.path().startsWith("/" + prefix));
    }

    //FONCTIONS -- CLIENT
    //Compte des notifications non lues (Client)
    getUnreadNotificationCount()
    {      
      return this.notifications.length;   
    }
   
    //Titre du bouton "notification"
    getNotificationButtonTitle(){
      var c = this.getUnreadNotificationCount();
      if (c > 0){
        return c.toString() + " notifications non lues."
      }
      return "Aucune nouvelle notification."
    }

    refreshNotifications(){
      this.notifications = [];
      this.notificationService.getNotificationsByClient(this.user.id).subscribe(notifications => {  
        this.notifications = notifications.filter(notif => !notif.toggled);
      });
    }

    logout(){
      localStorage.removeItem("user");
      this.router.navigate(["public_connexion"]);
    }
}