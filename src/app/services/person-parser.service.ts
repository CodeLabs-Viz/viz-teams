import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable()
export class PersonParserService {

  people: Array<Person> = [];

  constructor() { }

  parsecsv(file) {
    let result;
    const reader = new FileReader();
    reader.onload = () => {
      result = this.parseFileIntoPeople(reader.result);
    };
    reader.readAsText(file);
    this.people = result;
  }

  parseFileIntoPeople(text) {
    const people: Person[] = [];
    text.split('\n').forEach(line => {
      people.push(this.parseLineIntoPerson(line));
    });
    return people;
  }

  parseLineIntoPerson(line) {
    const props = line.split(',');
    const person: Person = {
      firstName: props[0],
      lastName: props[1],
      position: props[2],
      teamName: props[3]
    };
    return person;
  }
  unparseIntoFile() {
    let fileText = 'Firstname, Lastname, Position, Team' + '\n';
    this.people.forEach(p => {
      fileText += this.getLineFromPerson(p) + ('\n');
    });
  }
  

  getLineFromPerson(p) {
    return p.firstName + ',' + p.lastName + ',' + p.position + ',' + p.team;
  }

}



