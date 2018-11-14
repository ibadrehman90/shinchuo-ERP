import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWishComponent } from './client-wish.component';

describe('ClientWishComponent', () => {
  let component: ClientWishComponent;
  let fixture: ComponentFixture<ClientWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
