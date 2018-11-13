import {AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private afAuth : AngularFireAuth) {}

  signUp(email: string , password: string) {
    console.log('signUp called in auth.servie.ts');
    this.afAuth.auth.createUserWithEmailAndPassword(email , password).then(response => console.log(response)).catch(error => console.log(error));
  }

  login(email: string , password: string){
    console.log('login called in auth.service.ts');
    this.afAuth.auth.signInWithEmailAndPassword(email , password).then(response => console.log(response)).catch(error => console.log(error));
  }

  logout() {
    console.log('logout called in auth.service.ts');
    this.afAuth.auth.signOut().then(response => console.log(response)).catch(error => console.log(error));
  }
}
