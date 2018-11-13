import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("OnSubmit in login.commponent.ts was called!!!");
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email , password);

  }

}
