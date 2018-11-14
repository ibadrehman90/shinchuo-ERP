import { TestBed, inject } from '@angular/core/testing';

import { DatafromApiService } from './datafrom-api.service';

describe('DatafromApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafromApiService]
    });
  });

  it('should be created', inject([DatafromApiService], (service: DatafromApiService) => {
    expect(service).toBeTruthy();
  }));
});
