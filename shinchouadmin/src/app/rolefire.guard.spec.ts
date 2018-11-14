import { TestBed, async, inject } from '@angular/core/testing';

import { RolefireGuard } from './rolefire.guard';

describe('RolefireGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolefireGuard]
    });
  });

  it('should ...', inject([RolefireGuard], (guard: RolefireGuard) => {
    expect(guard).toBeTruthy();
  }));
});
