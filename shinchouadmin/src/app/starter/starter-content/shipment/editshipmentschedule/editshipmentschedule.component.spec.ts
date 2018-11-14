import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshipmentscheduleComponent } from './editshipmentschedule.component';

describe('EditshipmentscheduleComponent', () => {
  let component: EditshipmentscheduleComponent;
  let fixture: ComponentFixture<EditshipmentscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshipmentscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshipmentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
