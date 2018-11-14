import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YardvehiclesComponent } from './yardvehicles.component';

describe('YardvehiclesComponent', () => {
  let component: YardvehiclesComponent;
  let fixture: ComponentFixture<YardvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YardvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YardvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
