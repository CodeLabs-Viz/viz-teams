import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseTestService {

  constructor(private db: AngularFirestore) {  }

  // returns list of items
  getTestList(): Observable<FirebaseTestItem[]> {
    return this.db.collection('test').valueChanges() as Observable<FirebaseTestItem[]>;
  }

  // returns specific document
  getTestItem(): Observable<FirebaseTestItem> {
    return this.db.collection('test').doc('qQYe1ydVC91YO2gV1DRa').valueChanges() as Observable<FirebaseTestItem>;
  }

  // queries for specific items in a collection
  queryTestItem(): Observable<FirebaseTestItem[]> {
    return this.db.collection('test', ref => ref.where('color', '==', 'red')).valueChanges() as Observable<FirebaseTestItem[]>;
  }
}

export class FirebaseTestItem {
  id: string;
  value: string;
  color: string;
}
