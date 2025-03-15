import { TestBed } from '@angular/core/testing';

import { EmiService } from './emi.service';

describe('EmiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmiService = TestBed.get(EmiService);
    expect(service).toBeTruthy();
  });
});
