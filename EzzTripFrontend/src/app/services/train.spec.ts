import { TestBed } from '@angular/core/testing';

import { Train } from './train';

describe('Train', () => {
  let service: Train;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Train);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
