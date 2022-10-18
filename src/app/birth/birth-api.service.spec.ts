import { TestBed } from '@angular/core/testing';

import { BirthApiService } from './birth-api.service';

describe('BirthApiService', () => {
  let service: BirthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
