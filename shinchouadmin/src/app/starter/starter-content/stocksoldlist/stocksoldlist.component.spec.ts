import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksoldlistComponent } from './stocksoldlist.component';

describe('StocksoldlistComponent', () => {
  let component: StocksoldlistComponent;
  let fixture: ComponentFixture<StocksoldlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksoldlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksoldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
