import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdityardComponent } from './edityard.component';

describe('EdityardComponent', () => {
  let component: EdityardComponent;
  let fixture: ComponentFixture<EdityardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdityardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdityardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
