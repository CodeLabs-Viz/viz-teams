import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { DragService } from './services/drag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  onDrop(data: any) {
    alert(`dropped: ${data}`);
  }

  ngOnInit(){

  }

}
