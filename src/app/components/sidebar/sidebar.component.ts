import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';
import { Team } from '../../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  people: Array<Person> = [];
  freeAgents: Array<Person> = [];
  isAdding = false;
  person: Person = new Person(0, '', '', '', '');
  canSubmit = false;
  team: Team;
  isAddingTeam = false;
  constructor(
    private personService: PersonService,
    private router: Router) {
    this.personService.getPeople().subscribe(p => this.getFreeAgents(p));
  }

  startAdding() {
    this.isAdding = true;
  }

  stopAdding() {
    this.isAdding = false;
    this.clearFields();
  }

  finishAdding() {
    // Temporary fix until database is hooked up
    const randomId = Math.floor(Math.random() * 1000);
    const person = new Person(randomId, this.person.firstName, this.person.lastName, this.person.position, this.person.teamName);
    this.personService.addPerson(person);
    this.stopAdding();
  }

  clearFields() {
    this.person = new Person(0, '', '', '', '');
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

  startAddingTeam() {
    this.isAddingTeam = true;
  }

  stopAddingTeam() {
    this.isAddingTeam = false;
    this.clearFields();
  }

  

  validateTeam() {
    this.team.name !== ''
      ? this.canSubmit = true : this.canSubmit = false;
  }

  isDisabledTeam() {
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
    person = new Person(person.id, person.firstName, person.lastName, person.position, person.teamName);
    this.personService.addToTeam(person, new Team(0, '', []));
  }

  edit(person: Person) {
    this.router.navigateByUrl('/edit/' + person.id);
  }

  delete(person: Person) {
    
    if (confirm('Are you sure you want to remove ' + person.firstName + " " + person.lastName + '?')) {
      this.personService.removePerson(person);
    }
    
  }
}
