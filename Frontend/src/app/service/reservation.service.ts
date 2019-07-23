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
      return this.http.get('http://localhost/api/controller/script.php');
    }
}
