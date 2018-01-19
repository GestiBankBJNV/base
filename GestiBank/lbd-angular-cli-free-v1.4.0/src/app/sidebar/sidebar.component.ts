import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Accueil',  icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'Mon profil',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Gérer mes comptes',  icon:'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: 'maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

export const ROUTES_CONSEILLER : RouteInfo[] = [
    { path: 'conseiller_accueil', title: 'Accueil',  icon:'pe-7s-user', class: '' }
];

export const ROUTES_CLIENT : RouteInfo[] = [
    { path: 'client_accueil', title: 'Accueil',  icon:'pe-7s-home', class: '' },
    { path: 'client_profil', title: 'Mon profil',  icon:'pe-7s-user', class: '' },
    { path: 'client_notifications', title: 'Messages',  icon:'pe-7s-mail', class: '' },
    { path: 'client_comptes', title: 'Gérer mes comptes',  icon:'pe-7s-graph', class: '' }
];

export const ROUTES_ADMIN : RouteInfo[] = [
    { path: 'admin_accueil', title: 'Espace Admin',  icon:'pe-7s-user', class: '' }
];

export const ROUTES_PUBLIC: RouteInfo[] = [
    { path: 'public_accueil', title: 'Accueil',  icon: 'pe-7s-graph', class: '' },
    { path: 'public_connexion', title: 'Connexion',  icon: 'pe-7s-graph', class: '' }
    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() page : String;

  menuItems: any[];
  constructor(public location : Location) { 
    this.location = location;    
  }

  ngOnInit() {
    //console.log("Init sidebar");
    this.refresh();
  }

  ngOnChanges(){
    //console.log("Changes sidebar");
    this.refresh();
  }

  refresh(){
    //console.log(this.location.path());
    if (this.startsWith("public")){
      this.menuItems = ROUTES_PUBLIC.filter(menuItem => menuItem);
    }
    else if (this.startsWith("admin")){
      this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);      
    }
    else if (this.startsWith("conseiller")){
      this.menuItems = ROUTES_CONSEILLER.filter(menuItem => menuItem);      
    }
    else if (this.startsWith("client")){
      this.menuItems = ROUTES_CLIENT.filter(menuItem => menuItem);      
    }
    else{
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  startsWith(prefix){
    //console.log("Prefix : " + prefix + ", " + this.location.path());
    return (this.location.path().startsWith("/" + prefix));
  }
}
