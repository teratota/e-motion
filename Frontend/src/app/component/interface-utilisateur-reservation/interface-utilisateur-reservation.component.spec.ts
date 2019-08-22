import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUtilisateurReservationComponent } from './interface-utilisateur-reservation.component';

describe('InterfaceUtilisateurReservationComponent', () => {
  let component: InterfaceUtilisateurReservationComponent;
  let fixture: ComponentFixture<InterfaceUtilisateurReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceUtilisateurReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceUtilisateurReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
