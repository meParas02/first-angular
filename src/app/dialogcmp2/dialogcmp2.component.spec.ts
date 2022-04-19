import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogcmp2Component } from './dialogcmp2.component';

describe('Dialogcmp2Component', () => {
  let component: Dialogcmp2Component;
  let fixture: ComponentFixture<Dialogcmp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogcmp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogcmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
