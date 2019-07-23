import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';

import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';
import { InterfaceAdminComponent } from './component/interface-admin/interface-admin.component';
import { InterfaceAdminUtilisateursComponent } from './component/interface-admin-utilisateurs/interface-admin-utilisateurs.component';
import { InterfaceAdminOffreComponent } from './component/interface-admin-offre/interface-admin-offre.component';
import { InterfaceAdminReservationComponent } from './component/interface-admin-reservation/interface-admin-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientComponent,
    HistoriqueCommandeComponent,
    HomePageComponent,
    ReservationComponent,
    InterfaceAdminComponent,
    InterfaceAdminUtilisateursComponent,
    InterfaceAdminOffreComponent,
    InterfaceAdminReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
