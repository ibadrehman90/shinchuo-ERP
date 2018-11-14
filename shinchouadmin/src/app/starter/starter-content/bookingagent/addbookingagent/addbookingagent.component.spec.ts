import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookingagentComponent } from './addbookingagent.component';

describe('AddbookingagentComponent', () => {
  let component: AddbookingagentComponent;
  let fixture: ComponentFixture<AddbookingagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookingagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookingagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
