import { TestBed } from '@angular/core/testing';

import { Hackathonservice } from './hackathonservice';

describe('Hackathonservice', () => {
  let service: Hackathonservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hackathonservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
