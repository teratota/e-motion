import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAdminReservationComponent } from './interface-admin-reservation.component';

describe('InterfaceAdminReservationComponent', () => {
  let component: InterfaceAdminReservationComponent;
  let fixture: ComponentFixture<InterfaceAdminReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceAdminReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAdminReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
