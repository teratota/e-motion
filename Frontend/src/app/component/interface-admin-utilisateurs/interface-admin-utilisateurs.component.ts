import { ValidationService } from 'src/app/service/validation.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-admin-utilisateurs',
  templateUrl: './interface-admin-utilisateurs.component.html',
  styleUrls: ['./interface-admin-utilisateurs.component.css']
})
export class InterfaceAdminUtilisateursComponent implements OnInit {

  constructor(private UserService: UserService, private ValidationService: ValidationService) { }

  displayInfos = false;
  user: any[];

  ngOnInit() {
    this.user = this.UserService.getAll();
    let cookie = this.ValidationService.getCookie('tokenValidation');
    let result = this.ValidationService.verifadminconnection(cookie);
    if (result !== true) {
      window.location.href = '/';
    } else {
        this.displayInfos = true;
        result = this.UserService.getinfouser(cookie);
    }
  }

  onDelete(id) {
    this.UserService.delete(id);
    this.user = this.UserService.getAll();
  }

}
