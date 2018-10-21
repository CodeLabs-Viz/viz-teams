import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { PersonService } from './person.service';
import { createStub } from '../helpers/provide-stub.spec';
import { empty } from 'rxjs';
import { setupTestBed } from '../helpers/setup-test-bed.spec';

describe('TeamService', () => {
  const personService = createStub(PersonService);

  setupTestBed({
    providers: [TeamService, {provide: PersonService, useValue: personService }]
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    spyOn(personService, 'getPeople').and.returnValue(empty());
    expect(service).toBeTruthy();
  }));
});
