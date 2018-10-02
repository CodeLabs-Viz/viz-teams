import { Component, OnInit } from '@angular/core';
import { PersonParserService } from '../../services/person-parser.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router) {}

  ngOnInit() {
  }

  home(): void {
    this.router.navigateByUrl('/');
  }
}
