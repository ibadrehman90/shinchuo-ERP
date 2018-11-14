import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommodelComponent } from './custommodel.component';

describe('CustommodelComponent', () => {
  let component: CustommodelComponent;
  let fixture: ComponentFixture<CustommodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
