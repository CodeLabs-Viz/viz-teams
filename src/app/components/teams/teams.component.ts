import { Component } from '@angular/core';
import { Team } from '../../models/team'
import { TeamService } from '../../services/team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  teams: Team[] = [];

  constructor(private teamService: TeamService) { this.teamService.getTeams().subscribe(t => this.getTeams(t)) }


  getTeams(teams: Team[]): void {
    const theTeams: Team[] = [];
    for (const team of teams) {
      if (team.name !== '') {
        theTeams.push(team);
      }
    }
    this.teams = theTeams;
  }
}
