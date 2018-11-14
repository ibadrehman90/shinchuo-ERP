import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedlistComponent } from './purchasedlist.component';

describe('PurchasedlistComponent', () => {
  let component: PurchasedlistComponent;
  let fixture: ComponentFixture<PurchasedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
