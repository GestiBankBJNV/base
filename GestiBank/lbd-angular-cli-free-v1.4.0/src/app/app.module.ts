import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './shared/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LbdModule } from './lbd/lbd.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';

//IMPORTS TEMPLATE
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserComponent } from './user/user.component';

//IMPORTS ADMIN
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { AdminAffectationsComponent } from './admin-affectations/admin-affectations.component';
import { AdminConseillersComponent } from './admin-conseillers/admin-conseillers.component';
import { AdminFicheConseillerComponent } from './admin-fiche-conseiller/admin-fiche-conseiller.component';

//IMPORTS CLIENT
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';
import { ClientComptesComponent } from './client-comptes/client-comptes.component';
import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';

//IMPORTS CONSEILLER
import { ConseillerAccueilComponent } from './conseiller-accueil/conseiller-accueil.component';

//IMPORTS PUBLIC
import { ConnexionComponent } from './connexion/connexion.component';
import { EspacePublicComponent } from './espace-public/espace-public.component';
import { PublicDevisesComponent } from './public-devise/public-devises.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AdminAccueilComponent,        //ADMIN
    AdminAffectationsComponent,
    AdminConseillersComponent,
    AdminFicheConseillerComponent,
    ClientAccueilComponent,        //CLIENT
    ClientComptesComponent,
    ClientNotificationsComponent,
    ClientProfilComponent,
    ConseillerAccueilComponent,    //CONSEILLER
    ConnexionComponent,            //PUBLIC
    EspacePublicComponent,
    LoginComponent,
    PublicDevisesComponent,
    AppComponent,                  //DEFAULT
    HomeComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UpgradeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FooterModule,
    FormsModule,
    HttpModule,
    LbdModule,
    NavbarModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
