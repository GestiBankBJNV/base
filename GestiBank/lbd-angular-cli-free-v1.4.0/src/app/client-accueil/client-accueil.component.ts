import { Component, OnInit } from '@angular/core';
import { Notification } from '../classes/notification';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { CLIENT } from '../classes/FAKES';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.scss']
})
export class ClientAccueilComponent implements OnInit {
	client : Client = CLIENT;
  
  constructor(translate : TranslateService) {
     // this language will be used as a fallback when a translation isn't found in the current language
     translate.setDefaultLang('en');
     // the lang to use, if the lang isn't available, it will use the current loader to get them
     translate.use('en');
  }

  ngOnInit() {
  }

  getUnreadNotificationsCount() {
   return this.getUnreadNotifications().length;
  }
  
  getUnreadNotifications() : Notification[] {
      return this.client.notifications.filter(notif => !notif.isRead);
  }

}
