import { TestBed } from '@angular/core/testing';

import { FirebaseTestService } from './firebase-test.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { createStub } from '../helpers/provide-stub.spec';

describe('FirebaseTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: AngularFirestore, useValue: createStub(AngularFirestore)}]
  }));

  it('should be created', () => {
    const service: FirebaseTestService = TestBed.get(FirebaseTestService);
    expect(service).toBeTruthy();
  });
});
