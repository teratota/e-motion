import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { ModelService } from 'src/app/service/model.service';
import { MarqueService } from 'src/app/service/marque.service';
import { CouleurService } from 'src/app/service/couleur.service';
import { TypeService } from 'src/app/service/type.service';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { callbackify } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-utilisateur-offre',
  templateUrl: './interface-utilisateur-offre.component.html',
  styleUrls: ['./interface-utilisateur-offre.component.css']
})
export class InterfaceUtilisateurOffreComponent implements OnInit {

  vehiculeForm = new FormGroup({
    type:new FormControl('',[
        Validators.required
    ]),
    marque:new FormControl('',[
      Validators.required
    ]),
    model:new FormControl('',[
      Validators.required
    ]),
    couleur:new FormControl('',[
      Validators.required
    ]),
    autonomie:new FormControl('',[
      Validators.required
    ]),
    kilometrage:new FormControl('',[
      Validators.required
    ]),
    capaciter:new FormControl('',[
      Validators.required
    ]),
    coffre:new FormControl('',[
      Validators.required
    ]),
    plaque:new FormControl('',[
      Validators.required
    ]),
    prix:new FormControl('',[
      Validators.required
    ]),
    img:new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private UserService: UserService,
    private ValidationService: ValidationService,
    private ModelService: ModelService,
    private MarqueService: MarqueService,
    private CouleurService: CouleurService,
    private TypeService: TypeService,
    private VehiculeService: VehiculeService,
    private router : Router,
    private http: HttpClient,
    ) { }
    MessNotOffre : boolean;
    Msgimg : boolean;
    offre : any;
    marque: any[];
    model: any[];
    couleur: any[];
    type_vehicule: any[];
    ajoutVehicule: boolean;
    img : String | ArrayBuffer;

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

    saveVehicule(){
      var cookie=this.ValidationService.getCookie('tokenValidation');
      var result=this.UserService.getinfouser(cookie);
      if(this.img != ''){
        var insert = this.VehiculeService.saveVehicule(this.vehiculeForm.value,result.id,this.img);
        if(insert == true){
          var cookie=this.ValidationService.getCookie('tokenValidation');
          var result=this.UserService.getinfouser(cookie);
          this.offre=this.VehiculeService.getVehiculeForUser(result.id);
          this.Msgimg = false;
          this.ajoutVehicule=false;
        }
      }else{
        this.Msgimg = true;
      }
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

    onEdit(id){
      this.router.navigate(['/utilisateur/offre/edit'], {state: {data: {id}}});
    }

    onReservation(id){
      this.router.navigate(['/utilisateur/offre/reservation'], {state: {data: {id}}});
    }
    
    onFileChange(event) {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      }
      reader.onload = (e) => {
          this.img=reader.result;
        };
      console.log(this.img);
    }
}
