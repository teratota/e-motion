import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name : new FormControl('',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(1),
      Validators.pattern('^[a-zA-Z]+(([ -][a-zA-Z ])?[a-zA-Z]*)*$')
    ]),
    mail : new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    content : new FormControl('', [Validators.required]),
  });

  constructor(private ContactService: ContactService) { }

  ngOnInit() { }

  sendMail() {
    let mailSend = this.ContactService.contactPage(
      this.contactForm.value.mail,
      this.contactForm.value.name,
      this.contactForm.value.content);
  }

}
