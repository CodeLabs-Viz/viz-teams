import {AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(private afAuth : AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getAuthState() {
    return this.authState;
  }

  signUp(email: string , password: string) {
    console.log('signUp called in auth.servie.ts');
    this.afAuth.auth.createUserWithEmailAndPassword(email , password).then(response => console.log(response)).catch(error => console.log(error));
    this.router.navigate(["/home"]);
  }

  login(email: string , password: string){
    console.log('login called in auth.service.ts');
    this.afAuth.auth.signInWithEmailAndPassword(email , password).then(response => console.log(response)).catch(error => console.log(error));
    this.router.navigate(["/home"]);
  }

  logout() {
    console.log('logout called in auth.service.ts');
    this.afAuth.auth.signOut().then(response => console.log(response)).catch(error => console.log(error));
    this.router.navigate(["/login"]);
  }

  isLoggedIn() {
    if (this.currentUser == null) {
      return false;
    }
    console.log('this user has logged in using auth.service.ts');
    return true;
  }

}
