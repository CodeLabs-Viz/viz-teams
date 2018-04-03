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

  update(oldPerson: Person, newPerson: Person): Person[] {
    const index = this.getIndex(oldPerson);
    this.people[index] = newPerson;
    return this.people;
  }
  
  getIndex(person: Person): number {
    return this.people.indexOf(person);
  }

  getPerson(index: number): Person {
    return this.people[index];
  }
}