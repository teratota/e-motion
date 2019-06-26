import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeListeComponent } from './vehicule-liste.component';

describe('VehiculeListeComponent', () => {
  let component: VehiculeListeComponent;
  let fixture: ComponentFixture<VehiculeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
