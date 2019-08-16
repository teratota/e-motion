import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUtilisateurOffreEditComponent } from './interface-utilisateur-offre-edit.component';

describe('InterfaceUtilisateurOffreEditComponent', () => {
  let component: InterfaceUtilisateurOffreEditComponent;
  let fixture: ComponentFixture<InterfaceUtilisateurOffreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceUtilisateurOffreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceUtilisateurOffreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
