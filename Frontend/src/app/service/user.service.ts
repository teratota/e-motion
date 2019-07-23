import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   constructor() { }

    getAll() {
      var result: any;
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/user/get",
        dataType: "json",
        async: false,
        success: function(data) {
            console.log(data);
            result = data;
        }
    });
    console.log(result);
    return result;
    }

    delete(identifiant) {
      var result: any;
      $.ajax({
        type: "POST",
        url: "http://localhost:8000/user/delete",
        dataType: "json",
        async: false,
        data: {
          id: identifiant
        },
        success: function(data) {
            console.log(data);
            result = data;
        }
    });
    console.log(result);
    return result;
    }
}
