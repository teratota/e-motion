import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../../service/vehicule.service';

@Component({
  selector: 'app-detail-vehicule',
  templateUrl: './detail-vehicule.component.html',
  styleUrls: ['./detail-vehicule.component.css']
})
export class DetailVehiculeComponent implements OnInit {

  detail: any[];

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit() {
    this.detail = this.vehiculeService.detail;
  }

}
