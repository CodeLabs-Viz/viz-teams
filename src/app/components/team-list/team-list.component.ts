import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';
import { PersonParserService } from '../../services/person-parser.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() people: Person[] = [
    {firstName: 'Andrew', lastName: 'Palmer', position: 'WebDev', team: 'Blue'},
    {firstName: 'Mathew', lastName: 'Skaggs', position: 'WebDev', team: 'Blue'},
    {firstName: 'Jesse', lastName: 'Smith', position: 'WebDev', team: 'Blue'}  
  ];

  teams: Team[] = [
    {name: 'Blue', members: this.people}
  ];

  constructor(private personParsingService: PersonParserService) { }

  ngOnInit() {
    // this.people = this.personParsingService.people;
    // this.teams = this.buildTeams(this.people)  
  }
  buildTeams(people): Array<Team> {
    let teams: Array<Team> = [];
    people.forEach(element => {
      var team = element.team;
      let addTeam = true;
      teams.forEach(t => {
        if (t == team)
          addTeam = false;
      });
      if (addTeam) 
        teams.push(team);
    });
    return teams;
  }

  onDrop(data: any) {
    data.push("Blue")
    alert(`dropped: ${data}`);
  }
}
