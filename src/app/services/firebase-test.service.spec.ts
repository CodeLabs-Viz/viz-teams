import { TestBed } from '@angular/core/testing';

import { FirebaseTestService } from './firebase-test.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { createStub } from '../helpers/provide-stub.spec';
import { setupTestBed } from '../helpers/setup-test-bed.spec';

describe('FirebaseTestService', () => {
  setupTestBed({
    providers: [{provide: AngularFirestore, useValue: createStub(AngularFirestore)}]
  });

  it('should be created', () => {
    const service: FirebaseTestService = TestBed.get(FirebaseTestService);
    expect(service).toBeTruthy();
  });
});
