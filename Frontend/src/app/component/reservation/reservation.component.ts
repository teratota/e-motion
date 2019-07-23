import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/class/reservation';
import { Marque } from 'src/app/class/marque';
import { ReservationService } from 'src/app/service/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private ReservationService: ReservationService) {}
  type_vehicule = ['scooter', 'voiture'];
  marque: Marque[];
  model = ['models', 'modelx'];
  couleur = ['rouge', 'bleu', 'vert', 'noir'];
  type = ['4x4', 'couper', 'cabriolet', 'sport'];

  getMarque(): void {
    console.log('trouver');
  }

  ngOnInit() {
    this.ReservationService.getAll().subscribe((res: Marque[]) => {
      this.marque = res;
  });
    console.log(this.marque);
  }

 

  

 reservation = new Reservation(null,null,null,null,null,null,this.model[0],this.couleur[0],this.type[0]);

  submitted = false;


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.reservation); }

  

}
