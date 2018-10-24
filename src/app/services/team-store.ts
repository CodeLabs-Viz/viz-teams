import { Injectable } from '@angular/core';
import { Team } from '../models/team'

@Injectable()
export class TeamStore {
  teams: Team[];

  constructor() {
    this.teams = [];
  }

  init(teams: Team[]): Team[] {
    this.teams = teams;
    return this.teams;
  }

  add(team: Team): Team[] {
    this.teams.push(team);
    return this.teams;
  }

  remove(team: Team): Team[] {
    this.teams.splice(this.getIndex(team), 1);
    return this.teams;
  }

  update(team: Team): Team[] {
    const index = this.teams.indexOf(this.teams.filter(x => x.name === team.name)[0]);
    this.teams[index] = team;
    return this.teams;
  }

  getIndex(team: Team): number {
    let index: number;
    this.teams.forEach(t => {
      if (this.isTeamEqual(team, t)) {
        index = this.teams.indexOf(team);
      }
    });
    return index;
  }

  isTeamEqual(a: Team, b: Team) {
    return a.name === b.name && a.members === b.members && a.id === b.id;
  }

  getTeam(index: number): Team {
    return this.teams[index];
  }
}
