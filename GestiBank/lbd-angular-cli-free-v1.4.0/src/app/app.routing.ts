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
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';
import { EspacePublicComponent } from './espace-public/espace-public.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';

const routes: Routes =[
    { path: 'conseiller_accueil',      component: ConseillerAccueilComponent },
    { path: 'admin_accueil',      component: AdminAccueilComponent },
    { path: 'public_connexion',      component: ConnexionComponent },
    { path: 'dashboard',      component: HomeComponent },
    { path: 'client_accueil', component: ClientAccueilComponent },
    { path: 'client_profil', component: ClientProfilComponent },
    { path: 'public_accueil', component: EspacePublicComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '',          redirectTo: 'public_accueil', pathMatch: 'full' }
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
