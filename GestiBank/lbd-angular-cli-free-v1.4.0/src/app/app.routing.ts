import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

//IMPORTS PUBLIC
import { ConnexionComponent } from './connexion/connexion.component';
import { EspacePublicComponent } from './espace-public/espace-public.component';
import { PublicDevisesComponent } from './public-devise/public-devises.component';

//IMPORTS CONSEILLER
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';

//IMPORTS ADMIN
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';

//IMPORTS CLIENT
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';
import { ClientComptesComponent } from './client-comptes/client-comptes.component';
import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';

const routes: Routes =[
    { path: 'admin_accueil',         component: AdminAccueilComponent },        //ROUTES ADMIN
    { path: 'client_accueil',        component: ClientAccueilComponent },       //ROUTES CLIENT
    { path: 'client_comptes',        component: ClientComptesComponent },
    { path: 'client_devises',        component: PublicDevisesComponent },
    { path: 'client_notifications',  component: ClientNotificationsComponent },
    { path: 'client_profil',         component: ClientProfilComponent },
    { path: 'conseiller_accueil',    component: ConseillerAccueilComponent },   //ROUTES CONSEILLER
    { path: 'public_accueil',        component: EspacePublicComponent },        //ROUTES PUBLIC
    { path: 'public_connexion',      component: ConnexionComponent },
    { path: 'dashboard',             component: HomeComponent },                //ROUTES PAR DEFAUT (template)
    { path: 'icons',                 component: IconsComponent },
    { path: 'maps',                  component: MapsComponent },
    { path: 'notifications',         component: NotificationsComponent },
    { path: 'table',                 component: TablesComponent },
    { path: 'typography',            component: TypographyComponent },
    { path: 'upgrade',               component: UpgradeComponent },
    { path: 'user',                  component: UserComponent },
    { path: '',                      redirectTo: 'public_accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
