import { TestBed } from '@angular/core/testing';

import { PartApiService } from './part-api.service';

describe('PartApiService', () => {
  let service: PartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
