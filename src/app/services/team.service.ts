import { Injectable } from '@angular/core';
import { PersonService } from './person.service';
import { Team } from '../models/team';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TeamService {
  teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);



  constructor(private personService: PersonService, private db: AngularFirestore) {
 
  }


  getTeams(): Observable<Team[]> {
    return this.db.collection('team').valueChanges() as Observable<Team[]>;
  }

  getMembers(): Observable<Person[]> {
    return this.db.collection('person').valueChanges() as Observable<Person[]>;
  }


}
