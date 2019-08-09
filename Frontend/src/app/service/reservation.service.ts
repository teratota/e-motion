import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpParams, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Reservation } from 'src/app/class/reservation';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

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
      var test: any;
      $.ajax({
        type: "POST",
        data: {
          password:"salut"
        },
        url: "http://localhost:8000/marque/get",
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


    getHistory() {
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/reservation/getHistory',
        dataType: 'json',
        async: false,
        success(data) {
            console.log(data);
            result = data;
        }
    });
      console.log(result);
      return result;
    }

    saveReservation(reservation) {
      var test: any;
      $.ajax({
        type: "POST",
        data: {
          reservation: reservation
        },
        url: "http://localhost:8000/reservation/saveReservation",
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

    getReservationUser(id){
      var test: any;
      $.ajax({
        type: "POST",
        data: {
          id: id
        },
        url: "http://localhost:8000/reservation/getUserReservation",
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
