import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditPersonComponent } from './edit-person/edit-person.component';


@NgModule({
  declarations: [
    AppComponent,
    EditComponentComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
