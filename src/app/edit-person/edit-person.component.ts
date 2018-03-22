import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  firstName: '';
  lastName: '';
  position: '';
  team: '';

  constructor() { }

  ngOnInit() {
  }

}
