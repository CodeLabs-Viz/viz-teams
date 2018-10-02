import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from './person.service';

@Injectable()
export class PersonParserService {

  people: Array<Person> = [];
  id = 0;

  constructor(private personService: PersonService) { }

  parsecsv(file) {
    this.id = 0;
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
      people.push(this.parseLineIntoPerson(line));
    });
    this.personService.setPeople(people);
  }

  parseLineIntoPerson(line): Person {
    const props = line.split(',');
    const result = new Person(this.id, props[0].trim(), props[1].trim(), props[2].trim(), props[3].trim());
    this.id++;
    return result;
  }

  unparseIntoFile() {
    let fileText = 'Firstname, Lastname, Position, Team' + '\n';
    this.personService.getPeople().subscribe(people => {
        people.forEach((p) => {
          fileText += this.getLineFromPerson(p) + ('\n');
        }
      );
    });
    this.downloadFile(fileText);
  }

  getLineFromPerson(p) {
    return p.firstName + ',' + p.lastName + ',' + p.position + ',' + p.teamName;
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'VizTeams.csv';
    anchor.href = url;
    anchor.click();
    }
  }
