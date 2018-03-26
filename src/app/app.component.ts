import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  valid = '';
  validation = '';

  people: Person[] = [
    { firstName: 'Ted', lastName: 'Jones', position:'janitor', team: 'blue' },
    { firstName: 'John', lastName: 'Smith', position:'Baker', team: 'red' },
    { firstName: 'Fred', lastName: 'Waldon', position:'Policeman', team: 'green' },
  ];

  checkExtension (val) {
    var fileList = val.srcElement.files;
    var fileName = fileList[0].name.split('.');
    var extension = fileName[1];
    if (extension === 'csv') {
      this.valid = "Valid"
      this.validation = "green";
    } else {
      this.valid = "Invalid";
      this.validation = "red";
    }
  }
}
