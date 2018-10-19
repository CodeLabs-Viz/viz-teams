import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonComponent } from './edit-person.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createStub } from '../../helpers/provide-stub.spec';
import { PersonService } from '../../services/person.service';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;
  const activatedRoute = createStub(ActivatedRoute);

  beforeEach(async(() => {
    spyOn(activatedRoute, 'paramMap').and.returnValue({});
    TestBed.configureTestingModule({
      declarations: [ EditPersonComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: PersonService, useValue: createStub(PersonService)},
        {provide: Router, useValue: createStub(Router)}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
