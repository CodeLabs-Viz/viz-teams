// import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private afAuth : AngularFireAuth) { }

  signUp(email: string , password: string) {
    console.log('signUp called in auth.servie.ts');
    this.afAuth.auth.createUserWithEmailAndPassword(email , password).catch(error => console.log(error));
  }

  login(email: string , password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email , password).then(response => console.log(response)).catch();
  }
}
