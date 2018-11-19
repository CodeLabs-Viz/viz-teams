import { NgModule } from '@angular/core';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseTestComponent } from './components/firebase-test/firebase-test.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', component: TeamsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit/:id', component: EditPersonComponent},
  { path: 'firebase-test', component: FirebaseTestComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard]
})
export class AppRoutingModule { }
