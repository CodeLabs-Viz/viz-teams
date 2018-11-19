import {Component, OnInit, Input} from '@angular/core';
import {Person} from '../../models/person';
import {Team} from '../../models/team';
import {PersonService} from '../../services/person.service';
import {TeamService} from '../../services/team.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];
  people: Person[] = [];
  teamName = '';
  sub1 = false;
  sub2 = false;

  constructor(
    private personService: PersonService,
    private teamService: TeamService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.teamService.getTeams().subscribe(x => {
      this.teams = x;
      this.sub1 = true;
    });
    this.personService.getMembers().subscribe(x => {
      this.people = x;
      this.sub2 = true;
    });
  }

  // TODO: add validation on creating a team, so that duplicate teams can't exist
  addTeam() {
    this.teamService.addTeam(null, this.teamName);
    this.teamName = '';
  }

  onDrop(person: Person, team: Team) {
    this.personService.addToTeam(person, team.id);
  }

  deleteTeam(team: Team, people: Person[]) {
    if (confirm('Are you sure you want to delete ' + team.name + ' team?')) {
      this.teamService.deleteTeam(team.id, people);
    }
  }

  canSubmit() {
    return this.teamName === '';
  }

  edit(person: Person): void {
    this.router.navigateByUrl('/edit/' + person.id);
  }
}
