import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseTestComponent } from './firebase-test.component';
import { createStub } from '../../helpers/provide-stub.spec';
import { FirebaseTestService } from '../../services/firebase-test.service';
import { empty } from 'rxjs';

describe('FirebaseTestComponent', () => {
  let component: FirebaseTestComponent;
  let fixture: ComponentFixture<FirebaseTestComponent>;
  const firebaseTestService = createStub(FirebaseTestService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseTestComponent ],
      providers: [{provide: FirebaseTestService, useValue: firebaseTestService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOn(firebaseTestService, 'getTestItem').and.returnValue(empty());
    spyOn(firebaseTestService, 'getTestList').and.returnValue(empty());
    spyOn(firebaseTestService, 'queryTestItem').and.returnValue(empty());
    fixture = TestBed.createComponent(FirebaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
