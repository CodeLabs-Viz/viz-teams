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
  canSubmit = false;

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(x => this.person = x);
  }

  ngOnInit() {
  }

  deletePerson(id: string) {
    const personToRemove = this.person.firstName + ' ' + this.person.lastName;
    if (confirm('Are you sure you want to remove ' + personToRemove + '?')) {
      this.personService.deletePerson(id);
      this.home();
    }
  }

  finishEditing() {
    this.personService.updatePerson(this.person);
    this.home();
  }

  isDisabled() {
    return !this.canSubmit;
  }

  validatePerson() {

    this.person.firstName.trim() !== ''
    && this.person.lastName.trim() !== ''
    && this.person.position.trim() !== ''
      ? this.canSubmit = true : this.canSubmit = false;

  }

  home(): void {
    this.router.navigateByUrl('/');
  }
}




