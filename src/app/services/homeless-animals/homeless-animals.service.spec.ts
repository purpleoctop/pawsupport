import { TestBed } from '@angular/core/testing';

import { HomelessAnimalsService } from './homeless-animals.service';

describe('HomelessAnimalsService', () => {
  let service: HomelessAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomelessAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
