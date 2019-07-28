import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   constructor() { }

    getAll() {
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/user/get',
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

    delete(identifiant) {
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/user/delete',
        dataType: 'json',
        async: false,
        data: {
          id: identifiant
        },
        success(data) {
            console.log(data);
            result = data;
        }
    });
      console.log(result);
      return result;
    }

    connection(mail, pass) {
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/user/connexion',
        dataType: 'json',
        async: false,
        data: {
          email: mail,
          password: pass
        },
        success(data) {
            console.log(data);
            result = data;
        }
    });
      console.log(result);
      return result;
    }
}
