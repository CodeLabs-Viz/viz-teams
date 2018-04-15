import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  people: Array<Person> = [];
  freeAgents: Array<Person> = [];
  isAdding = false;
  person: Person = new Person('', '', '', '');
  canSubmit = false;
  team: Team;

  constructor(private personService: PersonService) {
    this.personService.getPeople().subscribe(p => this.getFreeAgents(p));
  }

  ngOnInit() {
  }

  startAdding() {
    this.isAdding = true;
  }

  stopAdding() {
    this.isAdding = false;
    this.clearFields();
  }

  finishAdding() {
    const person = new Person(this.person.firstName, this.person.lastName, this.person.position, this.person.teamName);
    this.personService.addPerson(person);
    this.stopAdding();
  }

  clearFields() {
    this.person = new Person('', '', '', '');
    this.canSubmit = false;
  }

  validatePerson() {
    this.person.firstName !== ''
      && this.person.lastName !== ''
      && this.person.position !== ''
      ? this.canSubmit = true : this.canSubmit = false;
  }

  isDisabled() {
    return !this.canSubmit;
  }

  getFreeAgents(people: Person[]): void {
    const freeAgents: Person[] = [];
    for (const person of people) {
      if (person.teamName === '') {
        freeAgents.push(person);
      }
    }
    this.freeAgents = freeAgents;
  }

  onDrop(person: Person, team: Team) {
    person = new Person(person.firstName, person.lastName, person.position, person.teamName);
    this.personService.addToTeam(person, new Team('', []));
  }

  removePerson(person: Person) {
    this.personService.removePerson(person);
  }
}
