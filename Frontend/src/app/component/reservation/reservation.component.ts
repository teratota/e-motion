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

  type_vehicule: any[];
  marque: Marque[]
  model: any[];
  couleur: any[];
  type: any[];

  Onchange(marque) {
    this.model = this.ModelService.getAll(marque);
  }

  ngOnInit() {
    this.marque = this.MarqueService.getAll();
    this.couleur = this.CouleurService.getAll();
    this.type_vehicule = this.TypeService.getAll();
  }

  Onclick() {

  }
 

  

 reservation = new Reservation(null,null,null,null,null,null,null,null,null);

  submitted = false;


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.reservation); }

  

}
