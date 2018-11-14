import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedbidsComponent } from './archivedbids.component';

describe('ArchivedbidsComponent', () => {
  let component: ArchivedbidsComponent;
  let fixture: ComponentFixture<ArchivedbidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedbidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedbidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
