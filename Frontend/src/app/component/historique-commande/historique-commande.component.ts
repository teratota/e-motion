import { ReservationService } from 'src/app/service/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent implements OnInit {

  constructor(private ReservationService: ReservationService) { }

  history: any[];

  /* Ajouter la connexion utilisateur */
  ngOnInit() {
    this.history = this.ReservationService.getHistory();
  }

}
