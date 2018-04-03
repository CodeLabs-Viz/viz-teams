import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

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
    teamName = '';
    
  constructor(private personService: PersonService) {
  
  }

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
    person.teamName = this.teamName;
    this.personService.addPerson(person);
    this.stopAdding(); 
  }

  clearFields(){
    this.firstName = '';
    this.lastName = '';
    this.position = '';
    this.teamName = '';
  }


}
