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
            result = data;
        }
    });
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
            result = data;
        }
    });
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
            result = data;
        }
    });
      return result;
    }

    insertUser(user){
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/user/insertUser',
        dataType: 'json',
        async: false,
        data: {
          user: user
        },
        success(data) {
            result = data;
        }
      });
      return result;
      }

      updateUser(user,id){
        let result: any;
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8000/user/updateUser',
          dataType: 'json',
          async: false,
          data: {
            user: user,id:id
          },
          success(data) {
              result = data;
          }
        });
        return result;
        }

    getinfouser(token) {
      let result: any;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/token/getinfouser',
        dataType: 'json',
        async: false,
        data: {
          token: token
        },
        success(data) {
            result = data;
        }
    });
      return result;
    }

}
