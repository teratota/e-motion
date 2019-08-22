import { ValidationService } from 'src/app/service/validation.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.css']
})
export class InterfaceAdminComponent implements OnInit {

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
