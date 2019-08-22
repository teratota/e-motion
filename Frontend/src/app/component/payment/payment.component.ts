import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';
import { UserService } from 'src/app/service/user.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { ValidationService } from 'src/app/service/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private ReservationService: ReservationService,
    private UserService: UserService,
    private ValidationService: ValidationService,
    private router: Router
  ) { }
  elements: Elements;
  card: StripeElement;
  reservation:any;
 
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };

    stripeTest = new FormGroup({
      name: new FormControl()
   });
   result: any;
  ngOnInit() {
    var cookie=this.ValidationService.getCookie('tokenValidation');
    var result=this.ValidationService.verifuserconnection(cookie);
    if(result!=true){
      window.location.href = '/';
    }else{
        var result=this.UserService.getinfouser(cookie);
        this.reservation=history.state.data;
        this.stripeTest = this.fb.group({
          name: ['', [Validators.required]]
        });
        this.stripeService.elements(this.elementsOptions)
          .subscribe(elements => {
            this.elements = elements;
            // Only mount the element the first time
            if (!this.card) {
              this.card = this.elements.create('card', {
                style: {
                  base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    lineHeight: '40px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                      color: '#CFD7E0'
                    }
                  }
                }
              });
              this.card.mount('#card-element');
            }
          });
    }
  }
  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          var token = JSON.stringify(result.token);
          var info=this.ValidationService.paymentStripe(token,this.reservation.prix);
          if(info == true){
            this.payment();
          }
        } else if (result.error) {
        }
      });
  }
  payment(){
    var json = JSON.stringify(this.reservation)
    this.ReservationService.saveReservation(json)
    this.router.navigate(['/utilisateur/reservation']);
  }

}
