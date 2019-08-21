import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ValidationService: ValidationService) { }
  connection: boolean;
  anonyme: boolean;
  admin: boolean;

  ngOnInit() {
    let cookie = this.ValidationService.getCookie('tokenValidation');
    let result = this.ValidationService.verifuserconnection(cookie);
    if (result === true) {
      let admin = this.ValidationService.verifadminconnection(cookie);
      if (admin === true) {
        this.admin = true;
      } else {
        this.connection = true;
      }
    } else {
      this.anonyme = true;
    }
  }

  deconnection() {
    let cookie = this.ValidationService.getCookie('tokenValidation');
    
    const deleteCookie = this.ValidationService.deleteCookie(cookie);
    
    document.cookie = 'tokenValidation = 0; path=/; expires=Thu, 18 Dec 1000 12:00:00 UTC';
    window.location.href = '/';
    
  }

}
