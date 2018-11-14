import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvesselComponent } from './addvessel.component';

describe('AddvesselComponent', () => {
  let component: AddvesselComponent;
  let fixture: ComponentFixture<AddvesselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvesselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
