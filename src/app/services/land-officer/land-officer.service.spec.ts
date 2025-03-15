import { TestBed } from '@angular/core/testing';

import { LandOfficerService } from './land-officer.service';

describe('LandOfficerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandOfficerService = TestBed.get(LandOfficerService);
    expect(service).toBeTruthy();
  });
});
