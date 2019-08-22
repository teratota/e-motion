import { Component, OnInit, Input } from '@angular/core';
import { VehiculeService } from '../../service/vehicule.service';
import { Router } from '@angular/router';
import { CouleurService } from 'src/app/service/couleur.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ValidationService } from 'src/app/service/validation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
}) 
export class DetailVehiculeComponent implements OnInit {

  connection: boolean;
  detail: any[];
  datedebut : String;
  datefin : String;
  info:  {img: string, marque: string, model: string, autonomie: number, coffre:number,couleur:string,kilometrage:number,personne:number, plaque : string, prix:number, id:number};

  constructor(private VehiculeService: VehiculeService, private router : Router,  private UserService: UserService,
    private ValidationService: ValidationService) { }

  ngOnInit() {
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      this.connection = false;
    }else{
      this.connection = true;
    }
    this.detail = history.state.data;
    this.datedebut = history.state.datedebut;
    this.datefin = history.state.datefin;
    this.info = this.VehiculeService.getInfoVehiculebyId(this.detail['vehicleID']);
  }

  reservation(id) {
    this.router.navigate(['/reservation'], {state: {data: {id},datedebut: this.datedebut,datefin: this.datefin}});
  }

}
