import { HistoriqueCommandeComponent } from './component/historique-commande/historique-commande.component';
import { GestionClientComponent } from './component/gestion-client/gestion-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'gestion', component : GestionClientComponent },
  { path : 'historique', component : HistoriqueCommandeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
