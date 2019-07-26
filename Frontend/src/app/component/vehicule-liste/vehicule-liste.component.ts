import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { Vehicule } from 'src/app/class/vehicule';
import { Reservation } from 'src/app/class/reservation';
import { Marque } from 'src/app/class/marque';
import { ReservationService } from 'src/app/service/reservation.service';
import { MarqueService } from 'src/app/service/marque.service';
import { ModelService } from 'src/app/service/model.service';
import { TypeService } from 'src/app/service/type.service';
import { CouleurService } from 'src/app/service/couleur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicule-liste',
  templateUrl: './vehicule-liste.component.html',
  styleUrls: ['./vehicule-liste.component.css']
})
export class VehiculeListeComponent implements OnInit {

  constructor(private VehiculeService: VehiculeService,
    private ReservationService: ReservationService,
    private ModelService: ModelService,
    private MarqueService: MarqueService,
    private CouleurService: CouleurService,
    private TypeService: TypeService,
    private router: Router) { }
  vehicule: Vehicule[];
  isViewable: boolean;
  type_vehicule: any[];
  marque: Marque[]
  model: any[];
  couleur: any[];
  type: any[];

  Onchange(marque) {
    this.model = this.ModelService.getAll(marque);
  }

  ngOnInit() {
    this.isViewable = false;
    this.marque = this.MarqueService.getAll();
    this.couleur = this.CouleurService.getAll();
    this.type_vehicule = this.TypeService.getAll();
  }

  public showvehicule(type,marque,model,couleur,datefin,datedebut) {
    var search = {};
    search['type']=type;
    search['marque']=marque;
    search['model']=model;
    search['couleur']=couleur;
    search['datefin']=datefin === undefined  ? "" : datefin;
    search['datedebut']=datedebut === undefined  ? "" : datedebut;
    var json = JSON.stringify(search)
    console.log(json);
    this.vehicule = this.VehiculeService.getAll(json);
    console.log(this.vehicule);
    this.isViewable = true;
  }
    
  detail(){
    
  }
 

}