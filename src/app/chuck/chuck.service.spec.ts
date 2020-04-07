import { TestBed } from '@angular/core/testing';

import { ChuckService } from './chuck.service';

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
