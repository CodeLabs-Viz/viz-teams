import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent {
  personToRemove: string;
  person = new Person(0, '', '', '', '');

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person = this.personService.getPerson(id);
  }

  removePerson(person: Person) {
    this.personToRemove = this.person.firstName + ' ' + this.person.lastName;
    confirm('Are you sure you want to remove ' + this.personToRemove + '?');
    this.personService.removePerson(person);
    this.home();
  }

  finishEditing() {
    this.personService.updatePerson(this.person);
    this.home();
  }

  home(): void {
    this.router.navigateByUrl('/');
  }
}
