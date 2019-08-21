import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUtilisateurOffreReservationComponent } from './interface-utilisateur-offre-reservation.component';

describe('InterfaceUtilisateurOffreReservationComponent', () => {
  let component: InterfaceUtilisateurOffreReservationComponent;
  let fixture: ComponentFixture<InterfaceUtilisateurOffreReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceUtilisateurOffreReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceUtilisateurOffreReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
