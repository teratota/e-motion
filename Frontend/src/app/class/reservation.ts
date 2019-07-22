import { Time } from '@angular/common';

export class Reservation {
    constructor(
        public typeVehicule : string,
        public dateDebut : Date,
        public heureDebut : Time,
        public dateFin : Date,
        public heureFin : Time,
        public marque: string,
        public model : string,
        public couleur: string,
        public type: string
      ) {  }
}
