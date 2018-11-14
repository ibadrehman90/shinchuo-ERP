import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LccrequestComponent } from './lccrequest.component';

describe('LccrequestComponent', () => {
  let component: LccrequestComponent;
  let fixture: ComponentFixture<LccrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LccrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LccrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
