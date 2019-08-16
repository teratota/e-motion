import { ValidationService } from 'src/app/service/validation.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-admin-reservation',
  templateUrl: './interface-admin-reservation.component.html',
  styleUrls: ['./interface-admin-reservation.component.css']
})
export class InterfaceAdminReservationComponent implements OnInit {

  constructor(private UserService: UserService, private ValidationService: ValidationService) { }

  displayInfos = false;

  ngOnInit() {
    let cookie = this.ValidationService.getCookie('tokenValidation');
    let result = this.ValidationService.verifadminconnection(cookie);
    if (result !== true) {
      window.location.href = '/';
    } else {
        this.displayInfos = true;
        result = this.UserService.getinfouser(cookie);
    }
  }

}
