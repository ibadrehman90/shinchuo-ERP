import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddloadingplanComponent } from './addloadingplan.component';

describe('AddloadingplanComponent', () => {
  let component: AddloadingplanComponent;
  let fixture: ComponentFixture<AddloadingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddloadingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddloadingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
