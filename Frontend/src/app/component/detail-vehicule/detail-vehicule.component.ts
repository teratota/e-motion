import { Component, OnInit, Input } from '@angular/core';
import { VehiculeService } from '../../service/vehicule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
}) 
export class DetailVehiculeComponent implements OnInit {

  detail: any[];
  info: any[];

  constructor(private VehiculeService: VehiculeService, private router : Router) { }

  ngOnInit() {
    this.detail = history.state.data;
    this.info = this.VehiculeService.getInfoVehiculebyId(this.detail['vehicleID']);
  }

  reservation(id) {
    this.router.navigate(['/reservation'], {state: {data: {id}}});
  }

}
