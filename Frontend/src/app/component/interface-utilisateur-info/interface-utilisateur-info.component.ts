import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { FormGroup, FormControl } from '@angular/forms';

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
    registerForm = new FormGroup({

      firstName:new FormControl(''),
      lastName:new FormControl(''),
      birthday:new FormControl(''),
      gender:new FormControl(''),
      phone:new FormControl(''),
      zip:new FormControl(''),
      adress:new FormControl(''),
      country:new FormControl(''),
      city:new FormControl(''),
      mail:new FormControl(''),
      password1:new FormControl(''),
      password2:new FormControl(''),
      driverLicense:new FormControl(''),
      
    });
  email: string;
  id: number;
  nom : string;
  prenom : string;
  edituser : boolean;

  ngOnInit() {
    this.edituser = false;
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
  editUser(){
    this.edituser = true;
  }
  notSave(){
    this.edituser = false;
  }
  saveUser(){
    console.warn(this.registerForm.value);
    this.edituser = false;
  }

}
