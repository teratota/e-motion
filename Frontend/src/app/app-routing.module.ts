import { ContactComponent } from './component/contact/contact.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { InterfaceAdminReservationComponent } from './component/interface-admin-reservation/interface-admin-reservation.component';
import { InterfaceAdminUtilisateursComponent } from './component/interface-admin-utilisateurs/interface-admin-utilisateurs.component';
import { InterfaceAdminOffreComponent } from './component/interface-admin-offre/interface-admin-offre.component';
import { InterfaceAdminComponent } from './component/interface-admin/interface-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './component/reservation/reservation.component';
import { DetailVehiculeComponent } from './component/detail-vehicule/detail-vehicule.component';
import { InterfaceUtilisateurComponent } from './component/interface-utilisateur/interface-utilisateur.component';
import { InterfaceUtilisateurInfoComponent } from './component/interface-utilisateur-info/interface-utilisateur-info.component';
import { InterfaceUtilisateurOffreComponent } from './component/interface-utilisateur-offre/interface-utilisateur-offre.component';
import { InterfaceUtilisateurReservationComponent } from './component/interface-utilisateur-reservation/interface-utilisateur-reservation.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { InterfaceUtilisateurOffreEditComponent } from './component/interface-utilisateur-offre-edit/interface-utilisateur-offre-edit.component';
import { InterfaceUtilisateurOffreReservationComponent } from './component/interface-utilisateur-offre-reservation/interface-utilisateur-offre-reservation.component';
import { PaymentComponent } from './component/payment/payment.component';

const routes: Routes = [
  { path : 'administration', component : InterfaceAdminComponent },
  { path : 'administration/utilisateurs', component : InterfaceAdminUtilisateursComponent },
  { path : 'administration/offre', component : InterfaceAdminOffreComponent },
  { path : 'administration/reservation', component : InterfaceAdminReservationComponent },
  { path : '', component : HomePageComponent},
  { path : 'reservation', component : ReservationComponent },
  { path : 'detail-vehicule', component : DetailVehiculeComponent },
  { path : 'connexion', component : ConnexionComponent},
  { path : 'utilisateur', component : InterfaceUtilisateurComponent},
  { path : 'utilisateur/info', component : InterfaceUtilisateurInfoComponent},
  { path : 'utilisateur/offre', component : InterfaceUtilisateurOffreComponent},
  { path : 'utilisateur/reservation', component : InterfaceUtilisateurReservationComponent},
  { path : 'inscription', component : InscriptionComponent},
  { path : 'utilisateur/offre/edit', component : InterfaceUtilisateurOffreEditComponent},
  { path : 'utilisateur/offre/reservation', component : InterfaceUtilisateurOffreReservationComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'reservation/payment', component : PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
