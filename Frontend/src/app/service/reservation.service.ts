import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpParams, HttpClientModule } from '@angular/common/http';
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
      var parameters = { "function" : 'getAllMarque', "parameter_number" : 0 }
      return this.http.post('http://localhost:8000/vehicule/getAll',parameters);
    }
}
