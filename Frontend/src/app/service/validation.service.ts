import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  verifuserconnection(token) {
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/token/verifconnectionuser',
      dataType: 'json',
      data: {
        token: token
      },
      async: false,
      success(data) {
          result = data;
      }
  });
    return result;
  }

  verifadminconnection(token) {
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/token/verifconnectionadmin',
      dataType: 'json',
      data: {
        token: token
      },
      async: false,
      success(data) {
          result = data;
      }
  });
    return result;
  }

  getCookie(nameCookie) {
    var oRegex = new RegExp("(?:; )?" + nameCookie + "=([^;]*);?");
 
    if (oRegex.test(document.cookie)) {
        return decodeURIComponent(RegExp["$1"]);
    } else {
        return null;
    }
  }

  deleteCookie(cookie) {
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/token/deleteCookie',
      dataType: 'json',
      data: {
        cookie: cookie
      },
      async: false,
      success(data) {
          result = data;
      }
  });
    return result;
  }

  validationEmail(email)
  {
    var verif     = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    if (verif.exec(email) == null)
    {
      return false;
    }
    else
    {
      return true;
    }    
  }
  validationChaine(chaine)
  {
    
  }
  validationDate()
  {

  }
  validationPassword(password){
    var passw=  /^[A-Za-z]\w{7,15}$/;
    if(password.match(passw)) 
    { 
    return true;
    }
    else
    { 
    return false;
    }
  }
  validationIdentiquePassword(password1,password2){
    if(password1 === password2){
      return true;
    }else{
      return false;
    }
  }

  paymentStripe(token,prix){
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/reservation/stripe',
      dataType: 'json',
      data: {
        token: token, prix: prix
      },
      async: false,
      success(data) {
          result = data;
      }
  });
    return result;
  }
}
