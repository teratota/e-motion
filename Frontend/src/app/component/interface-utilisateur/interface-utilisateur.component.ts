import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { PrenormalizedTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-interface-utilisateur',
  templateUrl: './interface-utilisateur.component.html',
  styleUrls: ['./interface-utilisateur.component.css']
})
export class InterfaceUtilisateurComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService
    ) { }

  email: string;
  id: number;
  nom : string;
  prenom : string;
  points: string;


  ngOnInit() {
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.points = result.point;
        this.email = result.mail;
        this.id = result.id;
        this.prenom = result.prenom;
        this.nom = result.nom;
    }
  }

  

}
