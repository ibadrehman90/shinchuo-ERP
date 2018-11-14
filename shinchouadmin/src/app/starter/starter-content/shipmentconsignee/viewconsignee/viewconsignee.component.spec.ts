import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsigneeComponent } from './viewconsignee.component';

describe('ViewconsigneeComponent', () => {
  let component: ViewconsigneeComponent;
  let fixture: ComponentFixture<ViewconsigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconsigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
