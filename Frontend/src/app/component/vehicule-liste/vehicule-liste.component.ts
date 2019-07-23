import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { Vehicule } from 'src/app/class/vehicule';

@Component({
  selector: 'app-vehicule-liste',
  templateUrl: './vehicule-liste.component.html',
  styleUrls: ['./vehicule-liste.component.css']
})
export class VehiculeListeComponent implements OnInit {

  constructor(private VehiculeService: VehiculeService) { }
  vehicule: Vehicule[];

  ngOnInit() {
    this.vehicule = this.VehiculeService.getAll();
    console.log(this.vehicule);
  }

}
