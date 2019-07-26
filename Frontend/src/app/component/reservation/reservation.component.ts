import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/class/reservation';
import { Marque } from 'src/app/class/marque';
import { ReservationService } from 'src/app/service/reservation.service';
import { MarqueService } from 'src/app/service/marque.service';
import { ModelService } from 'src/app/service/model.service';
import { TypeService } from 'src/app/service/type.service';
import { CouleurService } from 'src/app/service/couleur.service';


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
    private TypeService: TypeService
    ) {}

  MessageDatedebut: boolean;
  MessageDateFin: boolean;
  formreservation: boolean;
  payer: boolean;

  Onchange() {
  }

  ngOnInit() {
    this.MessageDatedebut = false;
    this.MessageDateFin = false;
    this.formreservation = true;
    this.payer = false;

  }

  verifdate(datedebut,datefin){
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
    if(datedebut!="" && datefin!=""){
      this.formreservation = false;
      this.payer = true;
    }
    
  }
  Onclick() {

  }

  submitted = false;

}
