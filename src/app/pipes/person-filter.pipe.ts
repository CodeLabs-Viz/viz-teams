import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

  transform(people: Person[], teamId?: string): any {
    if (!people || !teamId) {
      return people;
    }
    return people.filter(person => person.teamId === teamId);
  }

}
