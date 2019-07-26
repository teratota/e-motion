import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueReservationComponent } from './historique-reservation.component';

describe('HistoriqueReservationComponent', () => {
  let component: HistoriqueReservationComponent;
  let fixture: ComponentFixture<HistoriqueReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
