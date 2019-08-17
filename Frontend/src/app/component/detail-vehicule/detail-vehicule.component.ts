import { Component, OnInit, Input } from '@angular/core';
import { VehiculeService } from '../../service/vehicule.service';
import { Router } from '@angular/router';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
}) 
export class DetailVehiculeComponent implements OnInit {

  detail: any[];
  datedebut : String;
  datefin : String;
  info: any[];

  constructor(private VehiculeService: VehiculeService, private router : Router) { }

  ngOnInit() {
    this.detail = history.state.data;
    this.datedebut = history.state.datedebut;
    this.datefin = history.state.datefin;
    console.log(this.datedebut+" "+this.datedebut);
    this.info = this.VehiculeService.getInfoVehiculebyId(this.detail['vehicleID']);
  }

  reservation(id) {
    this.router.navigate(['/reservation'], {state: {data: {id},datedebut: this.datedebut,datefin: this.datefin}});
  }

}
