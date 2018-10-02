import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private auth: FirebaseAuth) { }

  login(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.auth.signOut();
  }
}
