import { TestBed } from '@angular/core/testing';

import { ServceService } from './servce.service';

describe('ServceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServceService = TestBed.get(ServceService);
    expect(service).toBeTruthy();
  });
});
