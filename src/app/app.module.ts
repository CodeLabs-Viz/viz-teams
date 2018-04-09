import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PersonParserService } from './services/person-parser.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { DragService } from './services/drag.service';
import { PersonService } from './services/person.service';
import { PersonStore } from './services/person-store';
import { TeamService } from './services/team.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    HeaderComponent,
    TeamListComponent,
    HeaderBarComponent,
    SidebarComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PersonParserService,
    DragService,
    PersonService,
    PersonStore,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
