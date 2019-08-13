import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ValidationService: ValidationService,) { }
  connection : boolean;
  anonyme : boolean;
  admin : boolean;

  ngOnInit() {
    console.log(document.cookie);
    var cookie=this.ValidationService.getCookie('tokenValidation');
    console.log(cookie);
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result==true){
      var admin=this.ValidationService.verifadminconnection(cookie);
      console.log(admin);
      if(result==true){
        this.admin = true;
      }else{
        this.connection=true;
      }
    }else{
      this.anonyme = true;
    }
  }

  deconnection(){
    var cookie=this.ValidationService.getCookie('tokenValidation');
  }

}
