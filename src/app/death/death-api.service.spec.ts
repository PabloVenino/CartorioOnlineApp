import { TestBed } from '@angular/core/testing';

import { DeathApiService } from './death-api.service';

describe('DeathApiService', () => {
  let service: DeathApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeathApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
