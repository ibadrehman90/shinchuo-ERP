import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LccclientComponent } from './lccclient.component';

describe('LccclientComponent', () => {
  let component: LccclientComponent;
  let fixture: ComponentFixture<LccclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LccclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LccclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
