import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientComponent,
    HistoriqueCommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
