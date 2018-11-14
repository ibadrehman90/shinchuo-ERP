import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommakeComponent } from './custommake.component';

describe('CustommakeComponent', () => {
  let component: CustommakeComponent;
  let fixture: ComponentFixture<CustommakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
