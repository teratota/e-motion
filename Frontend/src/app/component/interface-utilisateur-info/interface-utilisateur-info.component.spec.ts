import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUtilisateurInfoComponent } from './interface-utilisateur-info.component';

describe('InterfaceUtilisateurInfoComponent', () => {
  let component: InterfaceUtilisateurInfoComponent;
  let fixture: ComponentFixture<InterfaceUtilisateurInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceUtilisateurInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceUtilisateurInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
