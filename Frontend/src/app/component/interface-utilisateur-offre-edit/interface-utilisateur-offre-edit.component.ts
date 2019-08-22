import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { ModelService } from 'src/app/service/model.service';
import { MarqueService } from 'src/app/service/marque.service';
import { CouleurService } from 'src/app/service/couleur.service';
import { TypeService } from 'src/app/service/type.service';
import { VehiculeService } from 'src/app/service/vehicule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-utilisateur-offre-edit',
  templateUrl: './interface-utilisateur-offre-edit.component.html',
  styleUrls: ['./interface-utilisateur-offre-edit.component.css']
})
export class InterfaceUtilisateurOffreEditComponent implements OnInit {

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
    private router : Router
    ) { }
    MessNotOffre : boolean;
    Msgimg : boolean;
    offre : any;
    marque: any[]
    model: any[];
    couleur: any[];
    type_vehicule: any[];
    ajoutVehicule: boolean;
    img : String | ArrayBuffer;
    vehicule : number;
    info : any;

  ngOnInit() {
    this.marque = this.MarqueService.getAll();
    this.couleur = this.CouleurService.getAll();
    this.type_vehicule = this.TypeService.getAll(); 
    this.vehicule=history.state.data;
    this.info=this.VehiculeService.getInfoVehiculebyId(this.vehicule['id']);
    this.vehiculeForm.get('autonomie').setValue(this.info['autonomie']);
    this.vehiculeForm.get('kilometrage').setValue(this.info['kilometrage']);
    this.vehiculeForm.get('capaciter').setValue(this.info['personne']);
    this.vehiculeForm.get('coffre').setValue(this.info['coffre']);
    this.vehiculeForm.get('plaque').setValue(this.info['plaque']);
    this.vehiculeForm.get('prix').setValue(this.info['prix']);
    this.vehiculeForm.get('img').setValue(this.info['img']);
    this.ajoutVehicule = false;
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/connexion';
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

    saveVehicule(){
      if(this.img != ''){
        var insert = this.VehiculeService.updateVehicule(this.vehiculeForm.value,this.vehicule['id'],this.img);
        if(insert == true){
          this.router.navigate(['/utilisateur/offre']);
        }
      }else{
        this.Msgimg = true;
      }
      
    }

    notSave(){
      this.router.navigate(['/utilisateur/offre']);
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

    
    onFileChange(event) {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      }
        reader.onload = (e) => {
          this.img=reader.result;
        }
    }

}
