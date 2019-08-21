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
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicule-liste',
  templateUrl: './vehicule-liste.component.html',
  styleUrls: ['./vehicule-liste.component.css']
})
export class VehiculeListeComponent implements OnInit {

  vehiculeForm = new FormGroup({
    type:new FormControl('',[
      Validators.required
    ]),
    marque:new FormControl(''),
    model:new FormControl(''),
    couleur:new FormControl(''),
    datedebut:new FormControl('',[
      Validators.required
    ]),
    datefin:new FormControl('',[
      Validators.required
    ])
  });

  constructor(private VehiculeService: VehiculeService,
    private ReservationService: ReservationService,
    private ModelService: ModelService,
    private MarqueService: MarqueService,
    private CouleurService: CouleurService,
    private TypeService: TypeService,
    public router: Router) { }
  vehicule: Vehicule[];
  isViewable: boolean;
  type_vehicule: any[];
  marque: Marque[];
  model: any[];
  couleur: any[];
  type: any[];
  superieur :boolean;

  Onchange(marque) {
    this.model = this.ModelService.getAll(marque);
  }

  ngOnInit() {
    this.isViewable = false;
    this.marque = this.MarqueService.getAll();
    this.couleur = this.CouleurService.getAll();
    this.type_vehicule = this.TypeService.getAll();
  }

  public showvehicule() {
    if(this.vehiculeForm.value.datefin <= this.vehiculeForm.value.debut || this.vehiculeForm.value.debut >= this.vehiculeForm.value.datefin){
      this.superieur=true;
    }else{
      this.superieur=false;
      var search = this.vehiculeForm.value
      var json = JSON.stringify(search);
      console.log(json);
      this.vehicule = this.VehiculeService.getAll(json);
      console.log(this.vehicule);
      this.isViewable = true;
    }
  }
    
  detail(vehicleID){
    this.router.navigate(['/detail-vehicule'], {state: {data: {vehicleID},datedebut: this.vehiculeForm.value.datedebut,datefin: this.vehiculeForm.value.datefin}});
  }
 

}