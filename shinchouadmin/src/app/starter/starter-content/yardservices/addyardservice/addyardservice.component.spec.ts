import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddyardserviceComponent } from './addyardservice.component';

describe('AddyardserviceComponent', () => {
  let component: AddyardserviceComponent;
  let fixture: ComponentFixture<AddyardserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddyardserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddyardserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
