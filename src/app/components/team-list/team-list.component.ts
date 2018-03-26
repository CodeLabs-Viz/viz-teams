import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() people: Person[];

  constructor() { }

  ngOnInit() {
  }

}
