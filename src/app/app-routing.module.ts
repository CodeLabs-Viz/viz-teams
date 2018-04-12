import { NgModule } from '@angular/core';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: '', component: TeamListComponent},
  { path: 'edit/:id', component: EditPersonComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
