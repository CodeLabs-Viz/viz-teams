import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';
import { PersonParserService } from '../../services/person-parser.service';
import { Team } from '../../models/team';
import { PersonService } from '../../services/person.service';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() people: Person[] = [
    // {firstName: 'Andrew', lastName: 'Palmer', position: 'WebDev', team: 'Blue'},
    // {firstName: 'Jesse', lastName: 'Smith', position: 'WebDev', team: 'Blue'},
    // {firstName: 'Laura', lastName: 'Nothdurft', position: 'WebDev', team: 'Blue'},
    // {firstName: 'Mathew', lastName: 'Skaggs', position: 'WebDev', team: 'Blue'},
    // {firstName: 'Prabesh', lastName: 'Amatya', position: 'WebDev', team: 'Blue'}
  ];

  teams: Team[] = [];

  constructor(
    private personParsingService: PersonParserService,
    private personService: PersonService,
    private teamService: TeamService,
    private router: Router
  ) {
    this.teamService.getTeams().subscribe(t => this.getTeams(t));
  }

  ngOnInit() {
    // this.people = this.personParsingService.people;
    // this.teams = this.buildTeams(this.people)
  }


  onDrop(person: Person, team: Team) {
    person = new Person(person.firstName, person.lastName, person.position, person.teamName);
    this.personService.addToTeam(person, team);
  }

  getTeams(teams: Team[]): void {
    const theTeams: Team[] = [];
    for (const team of teams) {
      if (team.name !== '') {
        theTeams.push(team);
      }
    }
    this.teams = theTeams;
  }

  edit(person: Person): void {
    this.router.navigateByUrl('/edit/' + person.lastName);
  }
}
