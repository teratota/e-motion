import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  detail: any[];

  constructor() { }

  getAll(search) {
    var test;
    $.ajax({
      type: "POST",
      data: {
        search:search
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

  getVehiculeForUser(id){
    var test;
    $.ajax({
      type: "POST",
      data: {
        id:id
      },
      url: "http://localhost:8000/vehicule/getVehiculeForUser",
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
