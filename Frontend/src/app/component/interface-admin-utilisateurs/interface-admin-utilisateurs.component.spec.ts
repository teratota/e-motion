import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAdminUtilisateursComponent } from './interface-admin-utilisateurs.component';

describe('InterfaceAdminUtilisateursComponent', () => {
  let component: InterfaceAdminUtilisateursComponent;
  let fixture: ComponentFixture<InterfaceAdminUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceAdminUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAdminUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
