import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterVsBindingComponent } from './inter-vs-binding.component';

describe('InterVsBindingComponent', () => {
  let component: InterVsBindingComponent;
  let fixture: ComponentFixture<InterVsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterVsBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterVsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
