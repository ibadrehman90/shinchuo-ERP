import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalesComponent } from './editsales.component';

describe('EditsalesComponent', () => {
  let component: EditsalesComponent;
  let fixture: ComponentFixture<EditsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
