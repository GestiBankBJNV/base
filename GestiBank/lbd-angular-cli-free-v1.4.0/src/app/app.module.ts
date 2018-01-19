import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // pour le formulaire des conseillers
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

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
import { ClientComptesComponent } from './client-comptes/client-comptes.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';

import { AdminFicheConseillerComponent } from './admin-fiche-conseiller/admin-fiche-conseiller.component';

import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';
import { PublicDevisesComponent } from './public-devise/public-devises.component';
import { AdminConseillersComponent } from './admin-conseillers/admin-conseillers.component';
import { AdminAffectationsComponent } from './admin-affectations/admin-affectations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientAccueilComponent,
    EspacePublicComponent,
    ConnexionComponent,
    ClientComptesComponent,
    AdminAccueilComponent,
    ConseillerAccueilComponent,
    ClientProfilComponent,
    AdminFicheConseillerComponent,

    ClientNotificationsComponent,
    PublicDevisesComponent,
    AdminConseillersComponent,
    AdminAffectationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    ReactiveFormsModule // pour le formulaire des conseillers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
