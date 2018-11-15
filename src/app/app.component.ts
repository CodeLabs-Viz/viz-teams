import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { DragService } from './services/drag.service';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user = null;

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }

  ngOnInit(){
    this.auth.getAuthState().subscribe((user) => this.user = user);
  }

}
