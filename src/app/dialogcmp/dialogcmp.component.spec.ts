import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcmpComponent } from './dialogcmp.component';

describe('DialogcmpComponent', () => {
  let component: DialogcmpComponent;
  let fixture: ComponentFixture<DialogcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
