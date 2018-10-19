import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { TeamSortAscPipe } from '../../pipes/team-sort-asc.pipe';
import { PersonSortAscPipe } from '../../pipes/person-sort-asc.pipe';
import { DraggableDirective } from '../../directives/draggable.directive';
import { PersonParserService } from '../../services/person-parser.service';
import { PersonService } from '../../services/person.service';
import { PersonStore } from '../../services/person-store';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { createStub } from '../../helpers/provide-stub.spec';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamListComponent,
        TeamSortAscPipe,
        PersonSortAscPipe,
        DraggableDirective
      ],
      providers: [
        PersonParserService,
        PersonService,
        PersonStore,
        TeamService,
        {provide: Router, useValue: createStub(Router)}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
