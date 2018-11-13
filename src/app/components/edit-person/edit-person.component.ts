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
  canSubmit = false;
  backupPerson = new Person(0, '', '', '', '');

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person = this.personService.getPerson(id);
  }

  ngOnInit() {
    this.backupPersonToEdit(this.person);

    console.log(this.backupPerson);
  }

  removePerson(person: Person) {
    this.personToRemove = this.person.firstName + ' ' + this.person.lastName;
    if(confirm('Are you sure you want to remove ' + this.personToRemove + '?')){
      this.personService.removePerson(person);
      this.home();
    }
  }

  backupPersonToEdit(original: Person) {
    this.backupPerson.firstName = original.firstName;
    this.backupPerson.lastName = original.lastName;
    this.backupPerson.position = original.position;
    this.backupPerson.teamName = original.teamName;
    this.backupPerson.id = original.id;
  }
  restoreBackup() {
    this.person.id = this.backupPerson.id;
    this.person.firstName = this.backupPerson.firstName;
    this.person.lastName = this.backupPerson.lastName;
    this.person.position = this.backupPerson.position;
    this.person.teamName = this.backupPerson.teamName;
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
    this.restoreBackup();
    this.router.navigateByUrl('/');
  }
}




