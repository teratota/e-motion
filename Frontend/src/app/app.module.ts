import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';
import { FormHomePageComponent } from './component/form-home-page/form-home-page.component';
import { VehiculeListeComponent } from './component/vehicule-liste/vehicule-liste.component';
import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { DetailVehiculeComponent } from './component/detail-vehicule/detail-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientComponent,
    HistoriqueCommandeComponent,
    HomePageComponent,
    ReservationComponent,
    FormHomePageComponent,
    VehiculeListeComponent,
    PromotionComponent,
    DetailVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
