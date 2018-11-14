import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingservicesComponent } from './viewbookingservices.component';

describe('ViewbookingservicesComponent', () => {
  let component: ViewbookingservicesComponent;
  let fixture: ComponentFixture<ViewbookingservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookingservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
