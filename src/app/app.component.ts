import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { DragService } from './services/drag.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }

  ngOnInit(){

  }

}
