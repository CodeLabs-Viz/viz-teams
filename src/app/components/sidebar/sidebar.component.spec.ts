import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from '../../directives/draggable.directive';
import { RouterModule } from '@angular/router';
import { PersonStore } from '../../services/person-store';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent, DraggableDirective],
      imports: [FormsModule, RouterModule],
      providers: [PersonService, PersonStore]
    })
    .compileComponents();
  }));

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
    it('should reset person', () => {
      component.person = new Person(1, 'Tom', 'Bob', 'Dev', 'Green');

      component.clearFields();
//
      expect(component.person).toEqual(new Person(null, '', '', '', ''));
    });

    it('should make canSubmit false', () => {
      component.canSubmit = true;

      component.clearFields();

      expect(component.canSubmit).toEqual(false);
    });
  });
});
