export class Person {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  teamName: string;

  constructor(id: number, firstName: string, lastName: string, position: string, teamName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.teamName = teamName;
  }
}
