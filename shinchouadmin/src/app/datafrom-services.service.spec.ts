import { TestBed, inject } from '@angular/core/testing';

import { DatafromServicesService } from './datafrom-services.service';

describe('DatafromServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafromServicesService]
    });
  });

  it('should be created', inject([DatafromServicesService], (service: DatafromServicesService) => {
    expect(service).toBeTruthy();
  }));
});
