import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSliderComponent } from './complete-slider.component';

describe('CompleteSliderComponent', () => {
  let component: CompleteSliderComponent;
  let fixture: ComponentFixture<CompleteSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteSliderComponent]
    });
    fixture = TestBed.createComponent(CompleteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
