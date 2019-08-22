import { ValidationService } from 'src/app/service/validation.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-interface-admin-reservation',
  templateUrl: './interface-admin-reservation.component.html',
  styleUrls: ['./interface-admin-reservation.component.css']
})
export class InterfaceAdminReservationComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService,
    private ReservationService: ReservationService
    ) { }

  reservation: any;
  MessNotReservation: boolean;
  displayInfos = false;

  ngOnInit() {
    const cookie = this.ValidationService.getCookie('tokenValidation');
    const result = this.ValidationService.verifuserconnection(cookie);
    if (result !== true) {
      window.location.href = '/';
    } else {
        this.displayInfos = true;
        const result = this.UserService.getinfouser(cookie);
        this.reservation = this.ReservationService.getAllUserReservation();
        this.reservation.forEach(element => {
          element.ref_id_user = this.ReservationService.getNameUser(element.ref_id_user);
          this.reservation.nom = element.ref_id_user[0].nom;
          this.reservation.prenom = element.ref_id_user[0].prenom;
        });
        if (this.reservation.length === 0) {
          this.MessNotReservation = true;
        } else {
          this.MessNotReservation = false;
        }
    }
  }

}
