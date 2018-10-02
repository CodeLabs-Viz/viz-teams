import { TestBed } from '@angular/core/testing';

import { FirebaseTestService } from './firebase-test.service';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseTestService = TestBed.get(FirebaseTestService);
    expect(service).toBeTruthy();
  });
});
