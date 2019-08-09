import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-interface-utilisateur-info',
  templateUrl: './interface-utilisateur-info.component.html',
  styleUrls: ['./interface-utilisateur-info.component.css']
})
export class InterfaceUtilisateurInfoComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService
    ) { }

  email: string;
  id: number;
  nom : string;
  prenom : string;

  ngOnInit() {
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/connexion';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.email = result.mail;
        this.id = result.id;
        this.prenom = result.prenom;
        this.nom = result.nom;
    }
  }

}
