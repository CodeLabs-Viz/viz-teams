import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  people: Person[] = [
    { firstName: 'Ted', lastName: 'Jones', position:'janitor', team: 'blue' },
    { firstName: 'John', lastName: 'Smith', position:'Baker', team: 'red' },
    { firstName: 'Fred', lastName: 'Waldon', position:'Policeman', team: 'green' },
  ];

}
