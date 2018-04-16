import { Component } from '@angular/core';
import { Person } from './models/person';
import { DragService } from './services/drag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }

}
