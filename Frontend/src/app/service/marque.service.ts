import * as $ from 'jquery';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  
  constructor() { }
  
    getAll() {
      var result: any;
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/marque/get",
        dataType: "json",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
    }
}
