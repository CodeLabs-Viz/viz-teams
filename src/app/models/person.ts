export class Person {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  teamId: string;

  constructor(id: number, firstName: string, lastName: string, position: string, teamId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.teamId = teamId;
  }
}
