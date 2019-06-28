import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientComponent,
    HistoriqueCommandeComponent,
    HomePageComponent
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
    HttpClientModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
