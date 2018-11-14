import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleshistoryComponent } from './vehicleshistory.component';

describe('VehicleshistoryComponent', () => {
  let component: VehicleshistoryComponent;
  let fixture: ComponentFixture<VehicleshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
