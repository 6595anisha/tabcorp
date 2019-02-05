import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfromComponent } from './bookfrom.component';

describe('BookfromComponent', () => {
  let component: BookfromComponent;
  let fixture: ComponentFixture<BookfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
