import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookingagentComponent } from './editbookingagent.component';

describe('EditbookingagentComponent', () => {
  let component: EditbookingagentComponent;
  let fixture: ComponentFixture<EditbookingagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbookingagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbookingagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
