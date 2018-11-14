import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvesselComponent } from './viewvessel.component';

describe('ViewvesselComponent', () => {
  let component: ViewvesselComponent;
  let fixture: ComponentFixture<ViewvesselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvesselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
