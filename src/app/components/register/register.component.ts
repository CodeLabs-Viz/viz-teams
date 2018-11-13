import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("onSubmit in register.component.ts was called.");
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email , password);

  }

}
