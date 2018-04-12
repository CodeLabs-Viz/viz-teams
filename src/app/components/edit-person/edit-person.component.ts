import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  firstName = '';
  lastName = '';
  position = '';
  team = '';
  oldPerson = new Person('', '', '', '');
  newPerson = new Person('', '', '', '');

  validateInputs() {
    if (this.firstName === '' || this.lastName === ''
      || this.position === '' || this.team === '') {
      return true;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {
    this.personService.getPeople().subscribe(p => this.getPerson(p));
  }

  ngOnInit() {
  }

  getPerson(people: Person[]): void {
    const id = this.route.snapshot.paramMap.get('id');
    for (const person of people) {
      if (person.lastName === id) {
        this.oldPerson = person;
      }
    }
  }

  finishEditing(oldPerson: Person) {
    if (this.newPerson.firstName === '') {
      this.newPerson.firstName = this.oldPerson.firstName;
    }
    if (this.newPerson.lastName === '') {
      this.newPerson.lastName = this.oldPerson.lastName;
    }
    if (this.newPerson.position === '') {
      this.newPerson.position = this.oldPerson.position;
    }
    if (this.newPerson.teamName === '') {
      this.newPerson.teamName = this.oldPerson.teamName;
    }
    this.personService.updatePerson(this.oldPerson, this.newPerson);
  }

  onKeyFirstName(event: any) {
    this.newPerson.firstName = event.target.value;
  }

  onKeyLastName(event: any) {
    this.newPerson.lastName = event.target.value;
  }

  onKeyPosition(event: any) {
    this.newPerson.position = event.target.value;
  }

  onKeyTeamName(event: any) {
    this.newPerson.teamName = event.target.value;
  }

  log(person: any) {
    console.log(person);
  }

}
