import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcontainerComponent } from './bookcontainer.component';

describe('BookcontainerComponent', () => {
  let component: BookcontainerComponent;
  let fixture: ComponentFixture<BookcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookcontainerComponent]
    });
    fixture = TestBed.createComponent(BookcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
