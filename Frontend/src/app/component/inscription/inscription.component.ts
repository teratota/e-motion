import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

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

  constructor() { }

  ngOnInit() { }

  checkData() {
    console.warn(this.registerForm.value);

    console.log(name);
  }
}
