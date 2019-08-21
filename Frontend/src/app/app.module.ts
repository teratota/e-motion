import { InterfaceAdminReservationComponent } from './component/interface-admin-reservation/interface-admin-reservation.component';
import { InterfaceAdminUtilisateursComponent } from './component/interface-admin-utilisateurs/interface-admin-utilisateurs.component';
import { InterfaceAdminOffreComponent } from './component/interface-admin-offre/interface-admin-offre.component';
import { InterfaceAdminComponent } from './component/interface-admin/interface-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormHomePageComponent } from './component/form-home-page/form-home-page.component';
import { VehiculeListeComponent } from './component/vehicule-liste/vehicule-liste.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { HistoriqueReservationComponent } from './component/historique-reservation/historique-reservation.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { DetailVehiculeComponent } from './component/detail-vehicule/detail-vehicule.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InterfaceUtilisateurComponent } from './component/interface-utilisateur/interface-utilisateur.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { InterfaceUtilisateurInfoComponent } from './component/interface-utilisateur-info/interface-utilisateur-info.component';
import { InterfaceUtilisateurReservationComponent } from './component/interface-utilisateur-reservation/interface-utilisateur-reservation.component';
import { InterfaceUtilisateurOffreComponent } from './component/interface-utilisateur-offre/interface-utilisateur-offre.component';
import { InterfaceUtilisateurOffreEditComponent } from './component/interface-utilisateur-offre-edit/interface-utilisateur-offre-edit.component';
import { ContactComponent } from './component/contact/contact.component';
import { NgxStripeModule } from 'ngx-stripe';
import { InterfaceUtilisateurOffreReservationComponent } from './component/interface-utilisateur-offre-reservation/interface-utilisateur-offre-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReservationComponent,
    InterfaceAdminComponent,
    InterfaceAdminUtilisateursComponent,
    InterfaceAdminOffreComponent,
    InterfaceAdminReservationComponent,
    FormHomePageComponent,
    VehiculeListeComponent,
    PromotionComponent,
    DetailVehiculeComponent,
    HistoriqueReservationComponent,
    ConnexionComponent,
    NavbarComponent,
    InterfaceUtilisateurComponent,
    InscriptionComponent,
    InterfaceUtilisateurInfoComponent,
    InterfaceUtilisateurReservationComponent,
    InterfaceUtilisateurOffreComponent,
    InterfaceUtilisateurOffreEditComponent,
    ContactComponent,
    InterfaceUtilisateurOffreReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_AXzdUpIX7azjNPXpDIQlLHj500383OadJs'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
