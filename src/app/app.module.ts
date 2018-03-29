import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PersonParserService } from './services/person-parser.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    HeaderComponent,
    TeamListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
