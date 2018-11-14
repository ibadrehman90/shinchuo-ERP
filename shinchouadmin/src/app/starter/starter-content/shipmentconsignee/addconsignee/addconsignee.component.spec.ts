import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsigneeComponent } from './addconsignee.component';

describe('AddconsigneeComponent', () => {
  let component: AddconsigneeComponent;
  let fixture: ComponentFixture<AddconsigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconsigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
