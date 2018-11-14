import { TestBed, async, inject } from '@angular/core/testing';

import { StaffadminGuard } from './staffadmin.guard';

describe('StaffadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffadminGuard]
    });
  });

  it('should ...', inject([StaffadminGuard], (guard: StaffadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
