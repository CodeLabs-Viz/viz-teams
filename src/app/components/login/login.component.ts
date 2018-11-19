import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  onSubmit(form: NgForm) {
    this.auth.login({
      email: form.value.email,
      password: form.value.password
    });
  }
}

