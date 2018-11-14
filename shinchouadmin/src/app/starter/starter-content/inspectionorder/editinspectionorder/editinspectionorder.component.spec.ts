import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinspectionorderComponent } from './editinspectionorder.component';

describe('EditinspectionorderComponent', () => {
  let component: EditinspectionorderComponent;
  let fixture: ComponentFixture<EditinspectionorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinspectionorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinspectionorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
