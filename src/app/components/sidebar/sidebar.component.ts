import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  people: Array<Person> = [];
  isAdding = false;
  person: Person = new Person('', '', '', '');
  canSubmit = false;

  constructor(private personService: PersonService) {
    this.personService.getFreeAgents().subscribe(p => this.people = p);
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
}
