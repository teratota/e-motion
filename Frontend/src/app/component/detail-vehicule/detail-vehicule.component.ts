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

  constructor(private vehiculeService: VehiculeService, private router : Router) { }
  vehicule: number = 10;
  ngOnInit() {
    this.detail = this.vehiculeService.detail;
  }
  reservation(id){
    id = 1;
    this.router.navigate(['/reservation'], {state: {data: {id}}});
  }

}
