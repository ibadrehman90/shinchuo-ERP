import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontviewComponent } from './frontview.component';

describe('FrontviewComponent', () => {
  let component: FrontviewComponent;
  let fixture: ComponentFixture<FrontviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
