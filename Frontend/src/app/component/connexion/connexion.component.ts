import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  connection(mail, pass) {
    console.log(mail + pass);
    let connection = this.UserService.connection(mail, pass);
    console.log(connection);
    document.cookie = 'tokenValidation = ' + connection + '; expires=20*365' ;

  }

}
