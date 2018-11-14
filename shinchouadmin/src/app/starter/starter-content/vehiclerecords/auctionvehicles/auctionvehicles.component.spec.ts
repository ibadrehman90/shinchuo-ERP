import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionvehiclesComponent } from './auctionvehicles.component';

describe('AuctionvehiclesComponent', () => {
  let component: AuctionvehiclesComponent;
  let fixture: ComponentFixture<AuctionvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
