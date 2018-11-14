import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarddetailComponent } from './yarddetail.component';

describe('YarddetailComponent', () => {
  let component: YarddetailComponent;
  let fixture: ComponentFixture<YarddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
