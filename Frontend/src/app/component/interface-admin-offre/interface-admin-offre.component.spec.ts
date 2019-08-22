import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAdminOffreComponent } from './interface-admin-offre.component';

describe('InterfaceAdminOffreComponent', () => {
  let component: InterfaceAdminOffreComponent;
  let fixture: ComponentFixture<InterfaceAdminOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceAdminOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAdminOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
