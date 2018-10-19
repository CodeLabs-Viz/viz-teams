import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { PersonService } from './person.service';
import { createStub } from '../helpers/provide-stub.spec';
import { empty } from 'rxjs';

describe('TeamService', () => {
  const personService = createStub(PersonService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamService, {provide: PersonService, useValue: personService }]
    });
    spyOn(personService, 'getPeople').and.returnValue(empty());
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
