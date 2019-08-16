import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-interface-utilisateur-reservation',
  templateUrl: './interface-utilisateur-reservation.component.html',
  styleUrls: ['./interface-utilisateur-reservation.component.css']
})
export class InterfaceUtilisateurReservationComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService,
    private ReservationService: ReservationService
    ) { }

    reservation : any;
    MessNotReservation : boolean;

  ngOnInit() {
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.reservation = this.ReservationService.getReservationUser(result.id);
        if(this.reservation.length == 0){
          this.MessNotReservation=true;
        }else{
          this.MessNotReservation=false;
        }
    }
  }

}
