export class Person {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  teamId: string;
  html: boolean;
  css: boolean;
  javascript: boolean;
  angular: boolean;
  java: boolean;
  cSharp: boolean;
  sql: boolean;
  tdd: boolean;


  constructor(id: string, firstName: string, lastName: string, position: string, teamId: string, html: boolean, css: boolean,
              javascript: boolean, angular: boolean, java: boolean, cSharp: boolean, sql: boolean, tdd: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.teamId = teamId;
    this.html = html;
    this.css = css;
    this.javascript = javascript;
    this.java = java;
    this.angular = angular;
    this.cSharp = cSharp;
    this.sql = sql;
    this.tdd = tdd;
  }
}
