import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../models/person';
import {AngularFirestore} from '@angular/fire/firestore';
import {Team} from '../models/team';

@Injectable()
export class PersonService {
  person: Person;
  teams: Team[] = [];

  constructor(private db: AngularFirestore) {
  }

  getMembers(): Observable<Person[]> {
    return this.db.collection('person').valueChanges() as Observable<Person[]>;
  }

  getPerson(id: string): Observable<Person> {
    return this.db.collection('person').doc(id).valueChanges() as Observable<Person>;
  }

  addPerson(firstName: string, lastName: string, position: string, teamId: string) {
    this.db.collection('person').add({
      id: null,
      firstName: firstName,
      lastName: lastName,
      position: position,
      teamId: 'eifOc9Ci7tx3UIelR7qG',
      html: false,
      css: false,
      javascript: false,
      angular: false,
      java: false,
      cSharp: false,
      sql: false,
      tdd: false
    })
      .then(function (docRef) {
        docRef.update({
          id: docRef.id
        });
      });
  }

  addToTeam(person: Person, teamId: string) {
    this.db.collection('person').doc(person.id).update({
      teamId: teamId
    });
  }

  deletePerson(id: string) {
    this.db.collection('person').doc(id).delete();
  }

  updatePerson(person: Person): void {
    this.db.collection('person').doc(person.id).update({
      firstName: person.firstName,
      lastName: person.lastName,
      position: person.position,
      html: person.html,
      css: person.css,
      javascript: person.javascript,
      angular: person.angular,
      java: person.java,
      cSharp: person.cSharp,
      sql: person.sql,
      tdd: person.tdd
    });
  }
}
