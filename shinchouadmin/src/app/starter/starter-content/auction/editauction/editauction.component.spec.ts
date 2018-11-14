import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditauctionComponent } from './editauction.component';

describe('EditauctionComponent', () => {
  let component: EditauctionComponent;
  let fixture: ComponentFixture<EditauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
