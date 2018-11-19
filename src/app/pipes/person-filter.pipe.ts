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
    const filteredPeople = people.filter(person => person.teamId === teamId);

    return filteredPeople.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
  }

}
