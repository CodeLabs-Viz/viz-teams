import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from '../../directives/draggable.directive';
import { RouterModule } from '@angular/router';
import { SidebarSortAscPipe } from '../../pipes/sidebar-sort-asc.pipe';
import { createStub } from '../../helpers/provide-stub.spec';
import { setupTestBed } from '../../helpers/setup-test-bed.spec';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  setupTestBed({
    declarations: [SidebarComponent, DraggableDirective],
    imports: [FormsModule, RouterModule],
    providers: [
      { provide: PersonService, useValue: createStub(PersonService)},
      SidebarSortAscPipe
    ]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('startAdding', () => {
    it('should make isAdding true', () => {
      component.isAdding = false;

      component.startAdding();

      expect(component.isAdding).toEqual(true);
    });
  });

  describe('clearFields', () => {
    it('should make canSubmit false', () => {
      component.canSubmit = true;

      component.clearFields();

      expect(component.canSubmit).toEqual(false);
    });
  });
});
