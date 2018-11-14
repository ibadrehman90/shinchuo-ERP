import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookingservicesComponent } from './addbookingservices.component';

describe('AddbookingservicesComponent', () => {
  let component: AddbookingservicesComponent;
  let fixture: ComponentFixture<AddbookingservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookingservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
