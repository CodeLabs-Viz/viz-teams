import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PersonParserService } from './services/person-parser.service';
<<<<<<< HEAD
import { HeaderBarComponent } from './header-bar/header-bar.component';
=======
import { SidebarComponent } from './components/sidebar/sidebar.component';
>>>>>>> 9b5fa26f1af04441d68d7858c6befb95fee73f4e


@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    HeaderComponent,
    TeamListComponent,
<<<<<<< HEAD
    HeaderBarComponent
=======
    SidebarComponent
>>>>>>> 9b5fa26f1af04441d68d7858c6befb95fee73f4e
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
