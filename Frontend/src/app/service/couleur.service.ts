import * as $ from 'jquery';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CouleurService {
  
  constructor() { }
  
    getAll() {
      var result: any;
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/couleur/get",
        dataType: "json",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
    }
}
