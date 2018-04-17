import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models/team';

@Pipe({
  name: 'teamSortAsc'
})
export class TeamSortAscPipe implements PipeTransform {

  transform(value: Team[], args?: any): any {
    return value.sort((a, b) => a.name > b.name ? 1 : -1);
  }

}
