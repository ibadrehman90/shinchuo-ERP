import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingagentComponent } from './viewbookingagent.component';

describe('ViewbookingagentComponent', () => {
  let component: ViewbookingagentComponent;
  let fixture: ComponentFixture<ViewbookingagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookingagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
