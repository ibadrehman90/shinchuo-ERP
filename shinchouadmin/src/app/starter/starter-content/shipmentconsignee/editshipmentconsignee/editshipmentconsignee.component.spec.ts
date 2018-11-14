import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshipmentconsigneeComponent } from './editshipmentconsignee.component';

describe('EditshipmentconsigneeComponent', () => {
  let component: EditshipmentconsigneeComponent;
  let fixture: ComponentFixture<EditshipmentconsigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshipmentconsigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshipmentconsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
