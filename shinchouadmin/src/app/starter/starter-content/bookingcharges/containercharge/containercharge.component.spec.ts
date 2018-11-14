import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerchargeComponent } from './containercharge.component';

describe('ContainerchargeComponent', () => {
  let component: ContainerchargeComponent;
  let fixture: ComponentFixture<ContainerchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
