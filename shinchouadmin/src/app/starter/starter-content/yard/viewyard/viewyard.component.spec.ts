import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyardComponent } from './viewyard.component';

describe('ViewyardComponent', () => {
  let component: ViewyardComponent;
  let fixture: ComponentFixture<ViewyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
