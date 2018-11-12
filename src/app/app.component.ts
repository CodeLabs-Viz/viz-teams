import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { DragService } from './services/drag.service';
import * as firebase from 'firebase' 

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
    firebase.initializeApp({
      apiKey: 'AIzaSyBBFLTGAmv6yvIFns7H2XAKV5flYLEm-7U',
      authDomain: 'viz-teams.firebaseapp.com'
    });
  }

}
