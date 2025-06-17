import { TestBed } from '@angular/core/testing';

import { Participantservice } from './participantservice';

describe('Participantservice', () => {
  let service: Participantservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Participantservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
