import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyardserviceComponent } from './viewyardservice.component';

describe('ViewyardserviceComponent', () => {
  let component: ViewyardserviceComponent;
  let fixture: ComponentFixture<ViewyardserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewyardserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewyardserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
