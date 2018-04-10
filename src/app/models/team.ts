import { Person } from './person';

export class Team {
  name: string;
  members: Person[];

  constructor(name: string, members: Person[]) {
    this.name = name;
    this.members = members;
  }
}
