import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'personSortAsc'
})
export class PersonSortAscPipe implements PipeTransform {

  transform(value: Person[], args?: any): any {
    return value.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
  }

}
