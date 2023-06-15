import { TestBed } from '@angular/core/testing';

import { ProvaskiptestsService } from './provaskiptests.service';

describe('ProvaskiptestsService', () => {
  let service: ProvaskiptestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvaskiptestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
