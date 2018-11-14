import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvoyageComponent } from './viewvoyage.component';

describe('ViewvoyageComponent', () => {
  let component: ViewvoyageComponent;
  let fixture: ComponentFixture<ViewvoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
