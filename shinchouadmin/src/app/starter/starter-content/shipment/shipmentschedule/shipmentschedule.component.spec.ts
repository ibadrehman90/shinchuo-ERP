import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentscheduleComponent } from './shipmentschedule.component';

describe('ShipmentscheduleComponent', () => {
  let component: ShipmentscheduleComponent;
  let fixture: ComponentFixture<ShipmentscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
