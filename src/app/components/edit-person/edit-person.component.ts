import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  firstNameHasChanged = false;
  lastNameHasChanged = false;
  positionHasChanged = false;
  teamNameHasChanged = false;
  personToRemove: string;
  oldPerson = new Person('', '', '', '');
  editPerson = new Person('', '', '', '');
  newPerson = new Person('', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
    private router: Router
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

  removePerson(person: Person) {
    this.personToRemove = this.oldPerson.firstName + ' ' + this.oldPerson.lastName;
    confirm('Are you sure you want to remove ' + this.personToRemove + '?');
    this.personService.removePerson(person);
    this.router.navigateByUrl('/');
  }

  finishEditing(oldPerson: Person) {
    if (this.firstNameHasChanged) {
      this.newPerson.firstName = this.editPerson.firstName;
    } else {
      this.newPerson.firstName = this.oldPerson.firstName;
    }
    if (this.lastNameHasChanged) {
      this.newPerson.lastName = this.editPerson.lastName;
    } else {
      this.newPerson.lastName = this.oldPerson.lastName;
    }
    if (this.positionHasChanged) {
      this.newPerson.position = this.editPerson.position;
    } else {
      this.newPerson.position = this.oldPerson.position;
    }
    if (this.teamNameHasChanged) {
      this.newPerson.teamName = this.editPerson.teamName;
    } else {
      this.newPerson.teamName = this.oldPerson.teamName;
    }
    this.personService.updatePerson(this.oldPerson, this.newPerson);
    this.firstNameHasChanged = false;
    this.lastNameHasChanged = false;
    this.positionHasChanged = false;
    this.teamNameHasChanged = false;
    this.router.navigateByUrl('/');
  }

  home(): void {
    this.router.navigateByUrl('/');
  }

  onKeyFirstName(event: any) {
    this.firstNameHasChanged = true;
    this.editPerson.firstName = event.target.value;
  }

  onKeyLastName(event: any) {
    this.lastNameHasChanged = true;
    this.editPerson.lastName = event.target.value;
  }

  onKeyPosition(event: any) {
    this.positionHasChanged = true;
    this.editPerson.position = event.target.value;
  }

  onKeyTeamName(event: any) {
    this.teamNameHasChanged = true;
    this.editPerson.teamName = event.target.value;
  }

}
