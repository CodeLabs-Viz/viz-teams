import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../models/team';
import { Person } from '../models/person';
import { PersonStore } from '../services/person-store';

@Injectable()
export class PersonService {
  peopleSubject: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  constructor(private personStore: PersonStore) { }

  addToTeam(person: Person, team: Team): void {
    const newPerson = new Person(person.id, person.firstName, person.lastName, person.position, team.name);
    this.peopleSubject.next(this.personStore.update(newPerson));
  }

  addToFreeAgents(person: Person) {
    const newPerson = new Person(person.id, person.firstName, person.lastName, person.position, "");
    this.updatePerson(newPerson);
  }

  getPeople(): Observable<Person[]> {
    return this.peopleSubject;
  }

  getPerson(id: number): Person {
    return this.peopleSubject.getValue().filter(x => x.id === id)[0];
  }

  setPeople(people: Person[]): void {
    this.peopleSubject.next(this.personStore.init(people));
  }

  addPerson(person: Person): void {
    this.peopleSubject.next(this.personStore.add(person));
  }

  updatePerson(newPerson: Person): void {
    this.peopleSubject.next(this.personStore.update(newPerson));
  }

  removePerson(person: Person): void {
    this.peopleSubject.next(this.personStore.remove(person));
  }
}
