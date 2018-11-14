import { TestBed, async, inject } from '@angular/core/testing';

import { SalesadminGuard } from './salesadmin.guard';

describe('SalesadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesadminGuard]
    });
  });

  it('should ...', inject([SalesadminGuard], (guard: SalesadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
