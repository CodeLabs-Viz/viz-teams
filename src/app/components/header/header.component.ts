import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth: boolean;
  authSubscription: Subscription;
  userEmail: string;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.auth.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  onLogout() {
    this.userEmail = null;
    this.auth.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  toggleDropdown(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.className.indexOf('w3-show') === -1) {
      section.className += ' w3-show';
    } else {
      section.className = section.className.replace(' w3-show', '');
    }
  }
}
