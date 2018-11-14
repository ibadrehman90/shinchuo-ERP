import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinspectionComponent } from './addinspection.component';

describe('AddinspectionComponent', () => {
  let component: AddinspectionComponent;
  let fixture: ComponentFixture<AddinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
