import { TestBed } from '@angular/core/testing';

import { BandApiService } from './band-api.service';

describe('BandApiService', () => {
  let service: BandApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
