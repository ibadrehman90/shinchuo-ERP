import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshipmentplanComponent } from './viewshipmentplan.component';

describe('ViewshipmentplanComponent', () => {
  let component: ViewshipmentplanComponent;
  let fixture: ComponentFixture<ViewshipmentplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshipmentplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshipmentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
