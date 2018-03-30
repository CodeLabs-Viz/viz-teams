import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  people: Array<Person>=[]; 
    isAdding = false;
    firstName = '';
    lastName = '';
    position = '';

    
  constructor() { }

  ngOnInit() {  
  }

  startAdding(){
    this.isAdding = true;
  }

  stopAdding(){
    this.isAdding = false;
    this.clearFields();
  }

  finishAdding(){
    let person = new Person;
    person.firstName = this.firstName;
    person.lastName = this.lastName;
    person.position = this.position;
    this.people.push(person);
    this.stopAdding(); 
  }

  clearFields(){
    this.firstName = '';
    this.lastName = '';
    this.position = '';
  }


}
