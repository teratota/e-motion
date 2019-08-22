import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contactPage(mail, name, content){
    let result: any;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/contact/contactMail',
      dataType: 'json',
      async: false,
      data: {
        mail: mail, name: name, content: content
      },
      success(data) {
          result = data;
      }
    });
    return result;
    }
}
