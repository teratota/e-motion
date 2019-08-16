import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { ModelService } from 'src/app/service/model.service';
import { MarqueService } from 'src/app/service/marque.service';
import { CouleurService } from 'src/app/service/couleur.service';
import { TypeService } from 'src/app/service/type.service';
import { VehiculeService } from 'src/app/service/vehicule.service';

@Component({
  selector: 'app-interface-utilisateur-offre',
  templateUrl: './interface-utilisateur-offre.component.html',
  styleUrls: ['./interface-utilisateur-offre.component.css']
})
export class InterfaceUtilisateurOffreComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService,
    private ModelService: ModelService,
    private MarqueService: MarqueService,
    private CouleurService: CouleurService,
    private TypeService: TypeService,
    private VehiculeService: VehiculeService,
    ) { }
    MessNotOffre : boolean;
    offre : any;
    marque: any[]
    model: any[];
    couleur: any[];
    type_vehicule: any[];
    ajoutVehicule: boolean;

  ngOnInit() {
    this.ajoutVehicule = false;
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.offre=this.VehiculeService.getVehiculeForUser(result.id);
        if(this.offre.length == 0){
          this.MessNotOffre=true;
        }else{
          this.MessNotOffre=false;
        }
    }
  }

    newVehicule(){
      this.marque = this.MarqueService.getAll();
      this.couleur = this.CouleurService.getAll();
      this.type_vehicule = this.TypeService.getAll(); 
      this.ajoutVehicule = true;
    }

    saveVehicule(type,marques,models,couleurs,auto,kilo,capa,cof,plaque,prix,img){
      var cookie=this.ValidationService.getCookie('tokenValidation');
      var result=this.UserService.getinfouser(cookie);
      console.log(type);
      console.log(marques);
      console.log(models);
      console.log(couleurs);
      console.log(auto);
      console.log(kilo);
      console.log(capa);
      console.log(cof);
      console.log(plaque);
      console.log(prix);
      console.log(img.target);
      var vehicule = {};
      vehicule['type']=type;
      vehicule['user']=result.id;
      vehicule['marque']=marques;
      vehicule['model']=models;
      vehicule['couleur']=couleurs;
      vehicule['auto']=auto;
      vehicule['kilo']=kilo;
      vehicule['capa']=capa;
      vehicule['cof']=cof;
      vehicule['plaque']=plaque;
      vehicule['prix']=prix;
      vehicule['img']=img;
      this.VehiculeService.saveVehicule(vehicule);
      this.ajoutVehicule=false;
    }

    notSave(){
      this.ajoutVehicule=false;
    }

    Onchange(marque) {
      this.model = this.ModelService.getAll(marque);
    }

    onDelete(id) {
      var cookie=this.ValidationService.getCookie('tokenValidation');
      var result=this.UserService.getinfouser(cookie);
      let user_id = result.id;      
      this.VehiculeService.delete(id);
      this.offre = this.VehiculeService.getVehiculeForUser(user_id);
    }

}
