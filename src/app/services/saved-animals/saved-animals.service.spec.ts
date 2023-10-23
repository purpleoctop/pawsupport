import { TestBed } from '@angular/core/testing';

import { SavedAnimalsService } from './saved-animals.service';

describe('SavedAnimalsService', () => {
  let service: SavedAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
