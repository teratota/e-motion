import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private UserService: UserService) { }

  MessageMail: boolean;
  MessagePass: boolean;

  ngOnInit() {
    this.MessageMail = false;
    this.MessagePass = false;
  }

  connection(mail, pass) {
    if (mail === '') {
      this.MessageMail = true;
    } else {
      this.MessageMail = false;
    }
    if (pass === '') {
      this.MessagePass = true;
    } else {
      this.MessagePass = false;
    }
    if (mail !== '' || pass !== '') {
      let connectionResult = this.UserService.connection(mail, pass);

      if (connectionResult !== false) {
        document.cookie = 'tokenValidation = ' + connectionResult + '; expires=expires=Thu, 18 Dec 3000 12:00:00 UTC' ;
        window.location.href = '/';
      }

    }

  }

}
