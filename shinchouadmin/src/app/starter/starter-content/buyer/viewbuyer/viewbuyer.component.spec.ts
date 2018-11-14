import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuyerComponent } from './viewbuyer.component';

describe('ViewbuyerComponent', () => {
  let component: ViewbuyerComponent;
  let fixture: ComponentFixture<ViewbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
