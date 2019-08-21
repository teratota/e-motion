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
          test = data;
      }
  });
  return test;
  }

  saveVehicule(vehicule,id,img){
    var json = JSON.stringify(vehicule);
    var test;
    $.ajax({
      type: "POST",
      data: {
        vehicule:json,id:id,img:img
      },
      url: "http://localhost:8000/vehicule/saveVehicule",
      dataType: "json",
      async: false,
      success: function(data) {
          test = data;
      }
  });
  return test;
  }

  updateVehicule(vehicule,id,img){
    var json = JSON.stringify(vehicule);
    var test;
    $.ajax({
      type: "POST",
      data: {
        vehicule:json,id:id,img:img
      },
      url: "http://localhost:8000/vehicule/updateVehicule",
      dataType: "json",
      async: false,
      success: function(data) {
          test = data;
      }
  });
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
          test = data;
      }
  });
  return test;
  }

  delete(identifiant) {
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/vehicule/delete',
      dataType: 'json',
      async: false,
      data: {
        id: identifiant
      },
      success(data) {
          result = data;
      }
  });
    return result;
  }

  getInfoVehiculebyId(identifiant) {
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/vehicule/getInfoVehiculebyId',
      dataType: 'json',
      async: false,
      data: {
        id: identifiant
      },
      success(data) {
          result = data;
      }
  });
    return result;
  }

}
