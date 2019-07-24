import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

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
}
