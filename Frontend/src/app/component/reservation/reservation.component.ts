import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Reservation } from 'src/app/class/reservation';
import { Marque } from 'src/app/class/marque';
import { ReservationService } from 'src/app/service/reservation.service';
import { MarqueService } from 'src/app/service/marque.service';
import { ModelService } from 'src/app/service/model.service';
import { TypeService } from 'src/app/service/type.service';
import { CouleurService } from 'src/app/service/couleur.service';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(
    private ReservationService: ReservationService,
    private ModelService: ModelService,
    private MarqueService: MarqueService,
    private CouleurService: CouleurService,
    private TypeService: TypeService,
    private UserService: UserService,
    private ValidationService: ValidationService,
    private router: Router
    ) {}

    mailForm = new FormGroup({
      mail:new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
    });

    monthForm = new FormGroup({
      monthStart:new FormControl('',[
        Validators.required
      ]),
      monthEnd:new FormControl('',[
        Validators.required
      ]),
    });

    timeForm = new FormGroup({
      timeStart:new FormControl('',[
        Validators.required
      ]),
      timeEnd:new FormControl('',[
        Validators.required
      ]),
    });

  MessageDatedebut: boolean;
  MessageDateFin: boolean;
  MessageMail: boolean;
  formreservation: boolean;
  payer: boolean;
  email: String;
  datedebut: String;
  datefin: String;
  id_v: number;
  id: number;
  vehicule: any;

  Onchange() {
  }

  ngOnInit() {
    this.vehicule=history.state.data;
    if(this.vehicule==undefined){
      this.router.navigate(['/']);
    }
    this.MessageDatedebut = false;
    this.MessageDateFin = false;
    this.MessageMail = false;
    this.formreservation = true;
    this.payer = false;
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/connexion';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.mailForm.get('mail').setValue(result.mail);
        this.email = result.mail;
        this.id = result.id;
    }

  }

  verifform(datedebut,datefin,mail){
    console.log(datedebut);
    console.log(datefin);
    if(datedebut==""){
      this.MessageDatedebut = true;
    }else{
      this.MessageDatedebut = false;
    }
    if(datefin==""){
      this.MessageDateFin = true;
    }else{
      this.MessageDateFin = false;
    }
    if (mail === '' || this.ValidationService.validationEmail(mail)==false) {
      this.MessageMail = true;
    } else {
      this.MessageMail = false;
    }
    if(datedebut!="" && datefin!="" && this.ValidationService.validationEmail(mail)==true ){
      this.formreservation = false;
      this.email = mail;
      this.datedebut = datedebut;
      this.datefin = datefin;
      this.payer = true;
    }
  }
  verifDate(){
    console.log("valid");  
  }
  verifTime(){
    console.log("valid");
  }
  verif(){
    console.log("not");
  }
  payment(){
    var reservation = {};
    var json = JSON.stringify(reservation)
    this.ReservationService.saveReservation(json)
  }
  Onclick() {

  }

  submitted = false;

}
