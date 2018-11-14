import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RorochargeComponent } from './rorocharge.component';

describe('RorochargeComponent', () => {
  let component: RorochargeComponent;
  let fixture: ComponentFixture<RorochargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RorochargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RorochargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
