import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare const $: any;

//Interface contenant les informations sur les routes utilisées
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

/*
  /!\ RANGER LES ROUTES PAR ORDRE D'APPARITION DANS LA SIDEBAR /!\
*/

//Routes par défaut du template
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

//Routes - espace Admin
export const ROUTES_ADMIN : RouteInfo[] = [
    { path: 'admin_accueil', title: 'Espace Admin',  icon:'pe-7s-home', class: '' },
    { path: 'admin_conseillers', title: 'Conseillers',  icon:'pe-7s-id', class: '' },
    { path: 'admin_affectations', title: 'Affectations',  icon:'pe-7s-way', class: '' },
    { path: 'admin_devises', title: 'Devises',  icon:'pe-7s-cash', class: '' }
];

//Routes - espace Client
export const ROUTES_CLIENT : RouteInfo[] = [
    { path: 'client_accueil', title: 'client_route_accueil',  icon:'pe-7s-home', class: '' },
    { path: 'client_profil', title: 'Mon profil',  icon:'pe-7s-user', class: '' },
    { path: 'client_notifications', title: 'Messages',  icon:'pe-7s-mail', class: '' },
    { path: 'client_comptes', title: 'Gérer mes comptes',  icon:'pe-7s-graph', class: '' },
    { path: 'client_devises', title: 'Devises',  icon:'pe-7s-cash', class: '' }
];

//Routes - espace Conseiller
export const ROUTES_CONSEILLER : RouteInfo[] = [
    { path: 'conseiller_accueil', title: 'Accueil',  icon:'pe-7s-user', class: '' },
    { path: 'conseiller_devises', title: 'Devises',  icon:'pe-7s-cash', class: '' }

];

//Routes - espace Public
export const ROUTES_PUBLIC: RouteInfo[] = [
    { path: 'public_accueil', title: 'Accueil',  icon: 'pe-7s-home', class: '' },
    { path: 'public_connexion', title: 'Connexion',  icon: 'pe-7s-lock', class: '' },
    { path: 'public_devises', title: 'Devises',  icon:'pe-7s-cash', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() page : String; //On passera la valeur de location.path() (qui contient le chemin d'accès au module) dans cet input. A chaque changement de valeur, la fonction ngOnChanges() est appelée

  menuItems: any[]; //Contient les informations sur les routes.

  constructor(public location : Location) {
    this.location = location;
  }

  //Rafraichissement de la sidebar à son initialisation
  ngOnInit() {
    this.refresh();
  }

  //Rafraichissement de la sidebar à chaque changement de valeur de 'page'
  ngOnChanges(){
    this.refresh();
  }

  //Rafraichissement de la liste de routes (menuItems)
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

  //Teste la largeur d'écran. Voir éventuellement à passer la valeur dans une constante globale, plutôt que de l'avoir codée en dur.
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  //Cherche le préfixe de l'url actuelle.
  startsWith(prefix){
    //console.log("Prefix : " + prefix + ", " + this.location.path());
    return (this.location.path().startsWith("/" + prefix));
  }
}
