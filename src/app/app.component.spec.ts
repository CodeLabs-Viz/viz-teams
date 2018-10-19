import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Router } from '@angular/router';
import { createStub } from './helpers/provide-stub.spec';
import { PersonService } from './services/person.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterModule
      ],
      providers: [
        {provide: PersonService, useValue: createStub(PersonService)}
      ]
    }).compileComponents();
  }));
});
