import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogcmp3Component } from './dialogcmp3.component';

describe('Dialogcmp3Component', () => {
  let component: Dialogcmp3Component;
  let fixture: ComponentFixture<Dialogcmp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogcmp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogcmp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
