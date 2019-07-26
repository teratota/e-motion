import { HomePageComponent } from './component/home-page/home-page.component';
import { InterfaceAdminReservationComponent } from './component/interface-admin-reservation/interface-admin-reservation.component';
import { InterfaceAdminUtilisateursComponent } from './component/interface-admin-utilisateurs/interface-admin-utilisateurs.component';
import { InterfaceAdminOffreComponent } from './component/interface-admin-offre/interface-admin-offre.component';
import { InterfaceAdminComponent } from './component/interface-admin/interface-admin.component';
import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './component/reservation/reservation.component';

const routes: Routes = [
  { path : 'gestion', component : GestionClientComponent },
  { path : 'historique', component : HistoriqueCommandeComponent },
  { path : 'administration', component : InterfaceAdminComponent },
  { path : 'administration/utilisateurs', component : InterfaceAdminUtilisateursComponent },
  { path : 'administration/offre', component : InterfaceAdminOffreComponent },
  { path : 'administration/reservation', component : InterfaceAdminReservationComponent },
  { path : '', component : HomePageComponent},
  { path : 'reservation', component : ReservationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
