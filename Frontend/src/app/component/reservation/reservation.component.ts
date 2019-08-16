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
      window.location.href = '/';
    }else{
        var result=this.UserService.getinfouser(cookie);
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

  payment(){
    var reservation = {};
    reservation["vehicule"]=this.vehicule;
    reservation["datedebut"]=this.datedebut;
    reservation["datefin"]=this.datefin;
    reservation['email']=this.email;
    reservation['user']=this.id;
    var json = JSON.stringify(reservation)
    this.ReservationService.saveReservation(json)
  }
  Onclick() {

  }

  submitted = false;

}
