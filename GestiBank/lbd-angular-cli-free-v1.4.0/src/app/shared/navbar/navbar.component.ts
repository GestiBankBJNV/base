import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import {Client} from '../../classes/client';
import { CLIENT } from '../../classes/FAKES';
import { Notification } from '../../classes/notification';



@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{

    user : any = CLIENT;


    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;




    constructor(location: Location,  private element: ElementRef) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
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
      if (this.user.matricule){ return "conseiller";}
      if (this.user.conseillers){ return "admin";}//trouver un meilleur test pour les admins
      if (this.user.adresse){ return "client";}
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
      return this.getUnreadNotifications().length;
    }

    //retourne les notifications non lues(Client)
    getUnreadNotifications() : Notification[] {
      return this.user.notifications.filter(notif => !notif.isRead);
    }

    //Titre du bouton "notification"
    getNotificationButtonTitle(){
      var c = this.getUnreadNotificationCount();
      if (c > 0){
        return c.toString() + " notifications non lues."
      }
      return "Aucune nouvelle notification."
    }

    
}
