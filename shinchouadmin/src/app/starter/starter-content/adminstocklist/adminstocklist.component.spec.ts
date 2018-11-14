import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstocklistComponent } from './adminstocklist.component';

describe('AdminstocklistComponent', () => {
  let component: AdminstocklistComponent;
  let fixture: ComponentFixture<AdminstocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
