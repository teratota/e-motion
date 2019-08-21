import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface-utilisateur-info',
  templateUrl: './interface-utilisateur-info.component.html',
  styleUrls: ['./interface-utilisateur-info.component.css']
})
export class InterfaceUtilisateurInfoComponent implements OnInit {

    id: number;
    nom: string;
    prenom: string;
    edituser: boolean;
    password: boolean;
    mail: String;
    npermis: String;
    pays: string;
    code: string;
    city: string;
    adress: string;
    phone: string;
    genre: string;
    anniversaire: string;

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService
    ) {
      this.edituser = false;
      var cookie = this.ValidationService.getCookie('tokenValidation');
      var result = this.ValidationService.verifuserconnection(cookie);
      if (result != true) {
      window.location.href = '/';
    } else {
        let result = this.UserService.getinfouser(cookie);
        console.table(result);
        console.log(result.mail);
        this.mail = result.mail;
        this.npermis = result.npermis;
        this.pays = result.pays;
        this.code = result.code_postal;
        this.city = result.villes;
        this.adress = result.rue;
        this.phone = result.telephone;
        this.genre = result.genre;
        this.anniversaire = result.anniversaire;
        this.id = result.id;
        this.prenom = result.prenom;
        this.nom = result.nom;

    }
    }

    registerForm = new FormGroup({
      firstName: new FormControl(this.nom, [
        Validators.maxLength(50),
          Validators.minLength(1),
        Validators.pattern('^[a-zA-Z]+(([ -][a-zA-Z ])?[a-zA-Z]*)*$'),
          Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1),
        Validators.pattern('^[a-zA-Z]+(([ -][a-zA-Z ])?[a-zA-Z]*)*$')
      ]),
      birthday: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl(this.genre, [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      zip: new FormControl('', [
        Validators.required
      ]),
      adress: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      password1: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]),
      driverLicense: new FormControl('', [
        Validators.required
      ]),
    });


  ngOnInit() {
    this.registerForm.get('firstName').setValue(this.prenom);
    this.registerForm.get('lastName').setValue(this.nom);
    this.registerForm.get('birthday').setValue(this.anniversaire);
    this.registerForm.get('gender').setValue(this.genre);
    this.registerForm.get('phone').setValue(this.phone);
    this.registerForm.get('adress').setValue(this.adress);
    this.registerForm.get('country').setValue(this.pays);
    this.registerForm.get('zip').setValue(this.code);
    this.registerForm.get('city').setValue(this.city);
    this.registerForm.get('mail').setValue(this.mail);
    this.registerForm.get('driverLicense').setValue(this.npermis);
  }
  editUser() {
    this.edituser = true;
  }
  notSave() {
    this.edituser = false;
  }
  saveUser() {
    console.table(this.registerForm.value);
    let result = this.ValidationService.validationIdentiquePassword(this.registerForm.value.password1, this.registerForm.value.password2);
    if (result == false) {
      this.password = true;
    } else {
      let user = JSON.stringify(this.registerForm.value);
      let info = this.UserService.updateUser(user, this.id);
      if (info == true) {
       // this.confirmation = false;
       // this.MsgConfirmation = true;
       this.edituser = false;
      }
    }
  }

}
