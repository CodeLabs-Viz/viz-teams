import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PersonService} from '../../services/person.service';
import {Person} from '../../models/person';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  person: Person;
  saveDisabled: boolean;

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(x => this.person = x);
  }

  ngOnInit() {
  }

  deletePerson(person: Person) {
    const personToRemove = person.firstName + ' ' + person.lastName;
    if (confirm('Are you sure you want to remove ' + personToRemove + '?')) {
      this.personService.deletePerson(person.id);
      this.router.navigateByUrl('/');
    }
  }

  finishEditing() {
    this.personService.updatePerson(this.person);
    this.router.navigateByUrl('/');
  }

  validatePerson() {
    this.person.firstName === ''
    || this.person.lastName === ''
    || this.person.position === ''
      ? this.saveDisabled = true : this.saveDisabled = false;
  }

  toggleDropdown(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);

    if (section.className.indexOf('w3-show') === -1) {
      section.className += ' w3-show';
    } else {
      section.className = section.className.replace(' w3-show', '');
    }

    if (icon.className.includes('fa fa-caret-down')) {
      icon.className = icon.className.replace('fa fa-caret-down', ' fa fa-caret-up');
    } else {
      icon.className = icon.className.replace('fa fa-caret-up', ' fa fa-caret-down');
    }
  }
}




