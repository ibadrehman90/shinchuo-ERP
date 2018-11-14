import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignauctionComponent } from './assignauction.component';

describe('AssignauctionComponent', () => {
  let component: AssignauctionComponent;
  let fixture: ComponentFixture<AssignauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
