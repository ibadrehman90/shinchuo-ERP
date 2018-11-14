import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddyardComponent } from './addyard.component';

describe('AddyardComponent', () => {
  let component: AddyardComponent;
  let fixture: ComponentFixture<AddyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
