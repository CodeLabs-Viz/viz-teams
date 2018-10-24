import { Person } from './person';

export class Team {
  id: number;
  name: string;
  members: Person[];

  constructor(id: number, name: string, members: Person[]) {
    this.id = id;
    this.name = name;
    this.members = members;
  }
}
