import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshipmentplanComponent } from './editshipmentplan.component';

describe('EditshipmentplanComponent', () => {
  let component: EditshipmentplanComponent;
  let fixture: ComponentFixture<EditshipmentplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshipmentplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshipmentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
