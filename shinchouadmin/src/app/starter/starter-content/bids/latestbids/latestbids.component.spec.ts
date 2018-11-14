import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestbidsComponent } from './latestbids.component';

describe('LatestbidsComponent', () => {
  let component: LatestbidsComponent;
  let fixture: ComponentFixture<LatestbidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestbidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
