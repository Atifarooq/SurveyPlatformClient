import { TestBed } from '@angular/core/testing';

import { SurveyManagementService } from './survey-management.service';

describe('SurveyManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyManagementService = TestBed.get(SurveyManagementService);
    expect(service).toBeTruthy();
  });
});
