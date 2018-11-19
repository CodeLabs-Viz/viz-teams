import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from '../models/authData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afauth: AngularFireAuth) {
  }

  initAuthListener() {
    this.afauth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afauth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log('result -> ', result);
    }).catch(error => {
      console.log('error -> ', error);
    });
  }

  login(authData: AuthData) {
    this.afauth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
    }).catch(error => {
      console.log('error -> ', error);
    });
  }

  logout() {
    this.afauth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}










// import {AngularFireAuth} from '@angular/fire/auth';
// import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
// import * as firebase from 'firebase/app';
// import {Observable} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//
//   private authState: Observable<firebase.User>;
//   private currentUser: firebase.User = null;
//
//   constructor(private afAuth: AngularFireAuth, private router: Router) {
//     this.authState = this.afAuth.authState;
//     this.authState.subscribe(user => {
//       if (user) {
//         this.currentUser = user;
//       } else {
//         this.currentUser = null;
//       }
//     });
//   }
//
//   getAuthState() {
//     return this.authState;
//   }
//
//   signUp(email: string, password: string) {
//     this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(response => console.log(response)).catch(error => console.log(error));
//     this.router.navigate(['/home']);
//   }
//
//   login(email: string, password: string) {
//     this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => console.log(response)).catch(error => console.log(error));
//     this.router.navigate(['/home']);
//   }
//
//   logout() {
//     this.afAuth.auth.signOut().then(response => console.log(response)).catch(error => console.log(error));
//     this.router.navigate(['/login']);
//   }
//
//   isLoggedIn() {
//     if (this.currentUser == null) {
//       return false;
//     }
//     return true;
//   }
//
// }
