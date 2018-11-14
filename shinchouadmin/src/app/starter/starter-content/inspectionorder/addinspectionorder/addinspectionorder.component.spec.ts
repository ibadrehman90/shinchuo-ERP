import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinspectionorderComponent } from './addinspectionorder.component';

describe('AddinspectionorderComponent', () => {
  let component: AddinspectionorderComponent;
  let fixture: ComponentFixture<AddinspectionorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinspectionorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinspectionorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
