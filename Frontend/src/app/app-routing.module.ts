import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './component/reservation/reservation.component';

const routes: Routes = [
  { path : 'gestion', component : GestionClientComponent },
  { path : 'historique', component : HistoriqueCommandeComponent },
  { path : 'reservation', component : ReservationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
