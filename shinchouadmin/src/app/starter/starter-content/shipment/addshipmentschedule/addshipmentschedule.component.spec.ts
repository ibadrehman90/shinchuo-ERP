import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipmentscheduleComponent } from './addshipmentschedule.component';

describe('AddshipmentscheduleComponent', () => {
  let component: AddshipmentscheduleComponent;
  let fixture: ComponentFixture<AddshipmentscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshipmentscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshipmentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
