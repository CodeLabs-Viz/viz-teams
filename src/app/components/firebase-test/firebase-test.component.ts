import { Component, OnInit } from '@angular/core';
import { FirebaseTestItem, FirebaseTestService } from '../../services/firebase-test.service';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.scss']
})
export class FirebaseTestComponent implements OnInit {

  allItems: FirebaseTestItem[];
  queryItems: FirebaseTestItem[];
  singleItem: FirebaseTestItem;

  constructor(private service: FirebaseTestService) { }

  ngOnInit() {
    this.service.getTestList().subscribe(x => this.allItems = x);
    this.service.queryTestItem().subscribe(x => this.queryItems = x);
    this.service.getTestItem().subscribe(x => this.singleItem = x);
  }
}
