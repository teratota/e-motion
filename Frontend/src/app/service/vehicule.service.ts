import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpParams, HttpClientModule } from '@angular/common/http';
// import { vehicule } from 'src/app/class/vehicule';
import { Marque } from 'src/app/class/marque';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  tab = [];
  baseUrl = 'http://localhost/api';
  // vehicule: Vehicule[];

  constructor(private http: HttpClient) { }

  getAll() {
    /* var parameters = { "function" : 'getAllMarque', "parameter_number" : 0 }
     return this.http.post('http://localhost/api/controller/marqueController.php',parameters);*/
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open("POST", "http://localhost:8000/vehicule/get", true);
     xmlhttp.send("salut");
     return xmlhttp.responseText;
   }
}
