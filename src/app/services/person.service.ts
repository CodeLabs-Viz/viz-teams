import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Team } from '../models/team';
import { Person } from '../models/person';
import { PersonStore } from '../services/person-store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  peopleSubject: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  constructor(private personStore: PersonStore) { }

  addToTeam(person: Person, team: Team): void {
    const newPerson = new Person(person.firstName, person.lastName, person.position, team.name);
    this.peopleSubject.next(this.personStore.update(person, newPerson));
  }

  getPeople(): Observable<Person[]> {
    return this.peopleSubject;
  }

  setPeople(people: Person[]): void {
    this.peopleSubject.next(this.personStore.init(people));
  }

  addPerson(person: Person): void {
    this.peopleSubject.next(this.personStore.add(person));
  }

}
