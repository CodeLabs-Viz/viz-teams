import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TeamListComponent } from '../team-list/team-list.component';
import { createStub } from '../../helpers/provide-stub.spec';
import { PersonService } from '../../services/person.service';
import { FormsModule } from '@angular/forms';
import { SidebarSortAscPipe } from '../../pipes/sidebar-sort-asc.pipe';
import { setupTestBed } from '../../helpers/setup-test-bed.spec';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  setupTestBed({
    declarations: [
      TeamsComponent,
      SidebarComponent,
      TeamListComponent
    ],
    imports: [
      FormsModule
    ],
    providers: [
      {provide: PersonService, useValue: createStub(PersonService)},
      SidebarSortAscPipe
    ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
