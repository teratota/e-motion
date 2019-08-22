import * as $ from 'jquery';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ModelService {
  
  constructor() { }
  
    getAll(marque) {
      var result: any;
      $.ajax({
        type: "POST",
        data: {
          marque:marque
        },
        url: "http://localhost:8000/models/get",
        dataType: "json",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
    }
}
