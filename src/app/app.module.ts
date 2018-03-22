import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EditComponentComponent } from './edit-component/edit-component.component';
=======
>>>>>>> 2b753c29fd89c24a330095a83b10b99efe631e66
import { EditPersonComponent } from './edit-person/edit-person.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EditComponentComponent,
=======
>>>>>>> 2b753c29fd89c24a330095a83b10b99efe631e66
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
