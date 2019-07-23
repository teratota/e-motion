import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomePageComponent } from './form-home-page.component';

describe('FormHomePageComponent', () => {
  let component: FormHomePageComponent;
  let fixture: ComponentFixture<FormHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
