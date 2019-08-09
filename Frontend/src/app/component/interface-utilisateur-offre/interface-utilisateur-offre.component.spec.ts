import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUtilisateurOffreComponent } from './interface-utilisateur-offre.component';

describe('InterfaceUtilisateurOffreComponent', () => {
  let component: InterfaceUtilisateurOffreComponent;
  let fixture: ComponentFixture<InterfaceUtilisateurOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceUtilisateurOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceUtilisateurOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
