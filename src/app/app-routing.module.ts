import { NgModule } from '@angular/core';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseTestComponent } from './components/firebase-test/firebase-test.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { UserResolver } from './components/user/user.resolver';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: TeamsComponent},  //Will want to replace this with the login redirect at some point... -mjr-2010-10-24
  //Replace the above line with the the below line once testing is done.
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditPersonComponent},
  { path: 'firebase-test', component: FirebaseTestComponent},
  { path: '**', redirectTo: '' },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
