import { Component, OnInit } from '@angular/core';
import { FormHomePage } from 'src/app/class/form-home-page';

@Component({
  selector: 'app-form-home-page',
  templateUrl: './form-home-page.component.html',
  styleUrls: ['./form-home-page.component.css']
})
export class FormHomePageComponent implements OnInit {

  dateDebut = "26/06/2019";
  dateFin = "27/06/2019";
  heureDebut = "09:00";
  heureFin = "14:00";

  FormHomePage = new FormHomePage(this.dateDebut, this.heureDebut, this.dateFin, this.heureFin);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.FormHomePage); }

  constructor() { }

  ngOnInit() {
  }

}
