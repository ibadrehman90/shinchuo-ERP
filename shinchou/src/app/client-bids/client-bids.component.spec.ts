import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBidsComponent } from './client-bids.component';

describe('ClientBidsComponent', () => {
  let component: ClientBidsComponent;
  let fixture: ComponentFixture<ClientBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
