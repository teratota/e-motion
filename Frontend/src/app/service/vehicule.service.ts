import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpParams, HttpClientModule } from '@angular/common/http';
// import { vehicule } from 'src/app/class/vehicule';
import { Marque } from 'src/app/class/marque';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  tab = [];
  baseUrl = 'http://localhost/api';
  // vehicule: Vehicule[];

  constructor(private http: HttpClient) { }

  getAll() {
    var test: any;
    $.ajax({
      type: "POST",
      data: {
        password:"salut"
      },
      url: "http://localhost:8000/vehicule/get",
      dataType: "json",
      async: false,
      success: function(data) {
          console.log(data);
          test = data;
      }
  });
  console.log(test);
  return test;
  }
}
