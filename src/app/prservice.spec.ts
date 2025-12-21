import { TestBed } from '@angular/core/testing';

import { Prservice } from './prservice';

describe('Prservice', () => {
  let service: Prservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
