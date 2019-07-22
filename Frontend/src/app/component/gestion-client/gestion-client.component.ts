import { GestionClient } from './../../class/gestion-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {

  constructor() { }

  model = new GestionClient('', '', '', '', '', null, null, '', '', '', '', null, '');

  ngOnInit() {
  }

}
