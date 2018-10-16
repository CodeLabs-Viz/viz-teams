import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Fixture Tests', () => {

    describe('Header', () => {
      it('should show home button', () => {
        const element = fixture.debugElement.query(By.css('.header-home-button')).nativeElement;
        expect(element.textContent).toContain('Home');
      });

      it('should show home button', () => {
        const element = fixture.debugElement.query(By.css('.header-login-button')).nativeElement;
        expect(element.textContent).toContain('Login/Register');
      });
    });
  });
});
