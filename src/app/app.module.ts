import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { FirebaseTestComponent } from './components/firebase-test/firebase-test.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamListComponent } from './components/team-list/team-list.component';

import { DragService } from './services/drag.service';
import { FirebaseTestService } from './services/firebase-test.service';
import { PersonParserService } from './services/person-parser.service';
import { PersonService } from './services/person.service';
import { PersonStore } from './services/person-store';
import { TeamService } from './services/team.service';
import { TeamStore } from './services/team-store';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';

import { PersonSortAscPipe } from './pipes/person-sort-asc.pipe';
import { SidebarSortAscPipe } from './pipes/sidebar-sort-asc.pipe';
import { TeamSortAscPipe } from './pipes/team-sort-asc.pipe';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DropTargetDirective,
    EditPersonComponent,
    HeaderComponent,
    PersonSortAscPipe,
    SidebarComponent,
    SidebarSortAscPipe,
    TeamListComponent,
    TeamSortAscPipe,
    FirebaseTestComponent,
    TeamsComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    DragService,
    FirebaseTestService,
    PersonParserService,
    PersonService,
    PersonStore,
    TeamService,
    TeamStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
