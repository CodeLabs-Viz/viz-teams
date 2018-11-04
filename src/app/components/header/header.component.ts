import { Component } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User;

  constructor(private auth: AngularFireAuth) {
    this.auth.user.subscribe(x=>this.user = x);
  }
}
