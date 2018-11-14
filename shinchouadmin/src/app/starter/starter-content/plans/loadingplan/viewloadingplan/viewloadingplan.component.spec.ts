import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloadingplanComponent } from './viewloadingplan.component';

describe('ViewloadingplanComponent', () => {
  let component: ViewloadingplanComponent;
  let fixture: ComponentFixture<ViewloadingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewloadingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewloadingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
