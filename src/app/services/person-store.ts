import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable()
export class PersonStore {
  people: Person[];

  constructor() {
    this.people = [];
  }

  init(people: Person[]): Person[] {
    this.people = people;
    return this.people;
  }

  add(person: Person): Person[] {
    this.people.push(person);
    return this.people;
  }

  remove(person: Person): Person[] {
    this.people.splice(this.getIndex(person), 1);
    return this.people;
  }

  update(person: Person): Person[] {
    const index = this.people.indexOf(this.people.filter(x => x.id === person.id)[0]);
    this.people[index] = person;
    return this.people;
  }

  getIndex(person: Person): number {
    let index: number;
    this.people.forEach(p => {
      if (this.isPersonEqual(person, p)) {
        index = this.people.indexOf(p);
      }
    });
    return index;
  }

  isPersonEqual(a: Person, b: Person) {
    return a.firstName === b.firstName && a.lastName === b.lastName && a.position === b.position && a.teamName === b.teamName;
  }

  getPerson(index: number): Person {
    return this.people[index];
  }
}
