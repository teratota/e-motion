import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-interface-utilisateur-offre-reservation',
  templateUrl: './interface-utilisateur-offre-reservation.component.html',
  styleUrls: ['./interface-utilisateur-offre-reservation.component.css']
})
export class InterfaceUtilisateurOffreReservationComponent implements OnInit {


  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService,
    private ReservationService: ReservationService
    ) { }

    reservation: any;
    MessNotReservation: boolean;
    vehicule : any;

  ngOnInit() {
    const cookie = this.ValidationService.getCookie('tokenValidation');
    const result = this.ValidationService.verifuserconnection(cookie);
    if (result !== true) {
      window.location.href = '/';
    } else {
        this.vehicule=history.state.data;
        const result = this.UserService.getinfouser(cookie);
        this.reservation = this.ReservationService.getReservationVehicule(this.vehicule.id);
        if (this.reservation.length === 0) {
          this.MessNotReservation = true;
        } else {
          this.MessNotReservation = false;
        }
    }
  }

}
