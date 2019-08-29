import { TestBed } from '@angular/core/testing';

import { Authorization.GuardService } from './authorization.guard.service';

describe('Authorization.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Authorization.GuardService = TestBed.get(Authorization.GuardService);
    expect(service).toBeTruthy();
  });
});
