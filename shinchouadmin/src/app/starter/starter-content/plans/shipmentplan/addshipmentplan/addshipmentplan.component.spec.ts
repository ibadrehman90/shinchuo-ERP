import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipmentplanComponent } from './addshipmentplan.component';

describe('AddshipmentplanComponent', () => {
  let component: AddshipmentplanComponent;
  let fixture: ComponentFixture<AddshipmentplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshipmentplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshipmentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
