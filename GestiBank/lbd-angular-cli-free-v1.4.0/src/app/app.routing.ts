import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//IMPORTS TEMPLATE
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserComponent } from './user/user.component';

//IMPORTS PUBLIC
import { ConnexionComponent } from './connexion/connexion.component';
import { EspacePublicComponent } from './espace-public/espace-public.component';
import { PublicDevisesComponent } from './public-devise/public-devises.component';
import { LoginComponent } from './login/login.component';


//IMPORTS CONSEILLER
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';
import { ProspectionConseillerComponent } from './prospection-conseiller/prospection-conseiller.component';


//IMPORTS ADMIN
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { AdminAffectationsComponent } from './admin-affectations/admin-affectations.component';
import { AdminConseillersComponent } from './admin-conseillers/admin-conseillers.component';
import { AdminFicheConseillerComponent } from './admin-fiche-conseiller/admin-fiche-conseiller.component';

//IMPORTS CLIENT
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';
import { ClientComptesComponent } from './client-comptes/client-comptes.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';
import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';


const routes: Routes =[
    { path: 'admin_accueil',         component: AdminAccueilComponent },        //ROUTES ADMIN
    { path: 'admin_affectations', component: AdminAffectationsComponent },
    { path: 'admin_conseillers', component: AdminConseillersComponent },
    { path: 'admin_devises',        component: PublicDevisesComponent },
    { path: 'admin_fiche_conseiller',component: AdminFicheConseillerComponent },      
    { path: 'client_accueil',        component: ClientAccueilComponent },       //ROUTES CLIENT
    { path: 'client_comptes',        component: ClientComptesComponent },
    { path: 'client_devises',        component: PublicDevisesComponent },
    { path: 'client_profil',        component: ClientProfilComponent },
    { path: 'client_notifications',  component: ClientNotificationsComponent },
    { path: 'client_profil',  component: ClientProfilComponent },
    { path: 'conseiller_accueil',    component: ConseillerAccueilComponent },   //ROUTES CONSEILLER
    { path: 'conseiller_devises',    component: PublicDevisesComponent },
    { path: 'conseiller_prospection', component: ProspectionConseillerComponent},
    { path: 'public_accueil',        component: EspacePublicComponent },        //ROUTES PUBLIC
    { path: 'public_login',             component: LoginComponent },
    { path: 'public_connexion',      component: ConnexionComponent },
    { path: 'public_devises',        component: PublicDevisesComponent },
    { path: 'dashboard',      component: HomeComponent },                        //ROUTES TEMPLATE
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '**',        redirectTo: 'public_accueil' },
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
