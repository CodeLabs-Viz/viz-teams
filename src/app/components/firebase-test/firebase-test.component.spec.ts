import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseTestComponent } from './firebase-test.component';
import { createStub } from '../../helpers/provide-stub.spec';
import { FirebaseTestService } from '../../services/firebase-test.service';
import { empty } from 'rxjs';
import { setupTestBed } from '../../helpers/setup-test-bed.spec';

describe('FirebaseTestComponent', () => {
  let component: FirebaseTestComponent;
  let fixture: ComponentFixture<FirebaseTestComponent>;
  const firebaseTestService = createStub(FirebaseTestService);

  setupTestBed({
    declarations: [ FirebaseTestComponent ],
    providers: [{provide: FirebaseTestService, useValue: firebaseTestService}]
  });

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
