import {Injectable} from '@angular/core';
import {PersonService} from './person.service';
import {Team} from '../models/team';
import {Observable} from 'rxjs';
import {Person} from '../models/person';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class TeamService {


  constructor(private personService: PersonService, private db: AngularFirestore) {
  }

  getTeams(): Observable<Team[]> {
    return this.db.collection('team').valueChanges() as Observable<Team[]>;
  }

  addTeam(id: string, name: string) {
    this.db.collection('team').add({id: null, name: name}).then(function (docRef) {
      docRef.update({
        id: docRef.id
      }).catch(function (error) {
        console.log(error);
      });
    });
  }

  deleteTeam(id: string, people: Person[]) {
    for (const person of people) {
      if (person.teamId === id) {
        this.db.collection('person').doc(person.id).update({
          teamId: 'eifOc9Ci7tx3UIelR7qG'
        });
      }
    }
    this.db.collection('team').doc(id).delete();
  }
}
