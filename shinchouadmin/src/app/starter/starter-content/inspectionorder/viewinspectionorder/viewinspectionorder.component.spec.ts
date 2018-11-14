import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinspectionorderComponent } from './viewinspectionorder.component';

describe('ViewinspectionorderComponent', () => {
  let component: ViewinspectionorderComponent;
  let fixture: ComponentFixture<ViewinspectionorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinspectionorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinspectionorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
