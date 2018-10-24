import { Injectable } from '@angular/core';
import { PersonService } from './person.service';
import { Team } from '../models/team';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person';
import { TeamStore } from '../services/team-store';

@Injectable()
export class TeamService {
  teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);



  constructor(private teamStore: TeamStore, private personService: PersonService) {
     this.personService.getPeople().subscribe(p => this.buildTeams(p));
  }

  buildTeams(people: Person[]): void {
    const teams: Array<Team> = [];
    people.forEach(person => {
      if (!teams.find(t => t.name === person.teamName)) {
        const randomId = Math.floor(Math.random() * 1000);
        teams.push(new Team(randomId, person.teamName, [person]));
      } else {
        teams[teams.indexOf(teams.find(t => t.name === person.teamName))].members.push(person);
      }
    });

    this.teamsSubject.next(this.teamStore.init(teams));

  }

  getTeams(): Observable<Team[]> {
    return this.teamsSubject;
  }

  removeTeam(team: Team): void {
    let people = team.members;
    people.forEach(person => {
      person.teamName = '';
      this.personService.updatePerson(person);
    });
    this.teamsSubject.next(this.teamStore.remove(this.teamStore.getTeam(this.teamStore.getIndex(team))));
  }
}
