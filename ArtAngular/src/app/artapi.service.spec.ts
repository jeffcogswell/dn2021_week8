import { TestBed } from '@angular/core/testing';

import { ArtapiService } from './artapi.service';

describe('ArtapiService', () => {
  let service: ArtapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
