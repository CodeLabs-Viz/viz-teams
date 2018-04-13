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
    const fileText = text.split('\n');
    fileText.shift();
    fileText.pop();
    fileText.forEach(line => {
      this.personService.addPerson(this.parseLineIntoPerson(line));
    });
    return people;
  }

  parseLineIntoPerson(line): Person {
    const props = line.split(',');
    return new Person(props[0].trim(), props[1].trim(), props[2].trim(), props[3].trim());
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



