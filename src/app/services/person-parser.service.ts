import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from './person.service';

@Injectable()
export class PersonParserService {

  people: Array<Person> = [];

  constructor(private personService: PersonService) { }

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
      this.personService.addPerson(this.parseLineIntoPerson(line));
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
    this.personService.getPeople().forEach(p => {
      fileText += this.getLineFromPerson(p) + ('\n');
    });
  }

  getLineFromPerson(p) {
    return p.firstName + ',' + p.lastName + ',' + p.position + ',' + p.team;
  }

}



