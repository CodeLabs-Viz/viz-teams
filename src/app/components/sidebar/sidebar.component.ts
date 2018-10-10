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
export class SidebarComponent implements OnInit {

  people: Array<Person> = [];
  freeAgents: Array<Person> = [];
  isAdding = false;
<<<<<<< Updated upstream
  person: Person = new Person(0, '', '', '', '');
=======
  person: Person = new Person(null,'', '', '', '');
>>>>>>> Stashed changes
  canSubmit = false;
  team: Team;

  constructor(
    private personService: PersonService,
    private router: Router) {
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
<<<<<<< Updated upstream
    const person = new Person(this.person.id, this.person.firstName, this.person.lastName, this.person.position, this.person.teamName);
=======
    const person = new Person(this.person.id,this.person.firstName, this.person.lastName, this.person.position, this.person.teamName);
>>>>>>> Stashed changes
    this.personService.addPerson(person);
    this.stopAdding();
  }

  clearFields() {
<<<<<<< Updated upstream
    this.person = new Person(0, '', '', '', '');
=======
    this.person = new Person(null,'', '', '', '');
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    person = new Person(person.id, person.firstName, person.lastName, person.position, person.teamName);
=======
    person = new Person(person.id,person.firstName, person.lastName, person.position, person.teamName);
>>>>>>> Stashed changes
    this.personService.addToTeam(person, new Team('', []));
  }

  edit(person: Person) {
    this.router.navigateByUrl('/edit/' + person.lastName);
  }
}
