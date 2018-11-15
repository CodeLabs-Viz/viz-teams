import { Pipe, PipeTransform } from '@angular/core';
import {Team} from '../models/team';

@Pipe({
  name: 'teamFilter'
})
export class TeamFilterPipe implements PipeTransform {

  transform(teams: Team[], id?: string): any {
    if (!teams) {
      console.log('There are no teams dingus!');
    }
    if (!id) {
      console.log('There is no team id dingus!');
    }
    return teams.filter(team => team.id !== id);
  }
}
