import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LccsettingComponent } from './lccsetting.component';

describe('LccsettingComponent', () => {
  let component: LccsettingComponent;
  let fixture: ComponentFixture<LccsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LccsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LccsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
