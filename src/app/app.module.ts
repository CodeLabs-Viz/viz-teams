import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamListComponent } from './components/team-list/team-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    HeaderComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
