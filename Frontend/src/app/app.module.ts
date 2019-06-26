import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { FormHomePageComponent } from './component/form-home-page/form-home-page.component';
import { VehiculeListeComponent } from './component/vehicule-liste/vehicule-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormHomePageComponent,
    VehiculeListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
