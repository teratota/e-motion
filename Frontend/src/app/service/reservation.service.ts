import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpParams, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Reservation } from 'src/app/class/reservation';
import { Marque } from 'src/app/class/marque';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 // marque = Marque[]
  tab = [];
  baseUrl = 'http://localhost/api';
  reservation: Reservation[];
  
  constructor(private http: HttpClient) { }
  
    getAll() {
     /* var parameters = { "function" : 'getAllMarque', "parameter_number" : 0 }
      return this.http.post('http://localhost/api/controller/marqueController.php',parameters);*/
     /* var xmlhttp = new XMLHttpRequest();
      xmlhttp.open();
      xmlhttp.send("salut");
      var test = xmlhttp.responseText;"POST", "http://localhost:8000/marque/get", true
      //console.table(xmlhttp);
      console.log(test);
      
      return JSON.parse(xmlhttp.responseText);*/
     /* var response, xmlhttp;

      xmlhttp = new XMLHttpRequest;
      let test: any;
      let jsonResponse: any;
     // xmlhttp.responseType = 'json';
      xmlhttp.open("POST", "http://localhost:8000/marque/get", false);
     // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.send();
      xmlhttp.onprogress  = function() {
        var jsonResponse = xmlhttp.response;
        console.log(jsonResponse);
        test = jsonResponse;
      };
      
      return test;
     /* const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
      })*/
      return this.http.post("http://localhost:8000/marque/get", 'salut')
    }
}
