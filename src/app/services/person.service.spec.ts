import { TestBed, inject } from '@angular/core/testing';

import { PersonService } from './person.service';
import { createStub } from '../helpers/provide-stub.spec';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: PersonService, useValue: createStub(PersonService)}]
    });
  });

  it('should be created', inject([PersonService], (service: PersonService) => {
    expect(service).toBeTruthy();
  }));
});
