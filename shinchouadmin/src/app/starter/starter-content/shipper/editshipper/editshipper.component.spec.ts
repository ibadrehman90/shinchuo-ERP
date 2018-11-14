import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshipperComponent } from './editshipper.component';

describe('EditshipperComponent', () => {
  let component: EditshipperComponent;
  let fixture: ComponentFixture<EditshipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshipperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
