import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from '../../../app-routing.module';

import { AuthenticatedComponent } from './authenticated.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticatedComponent', () => {
  let component: AuthenticatedComponent;
  let fixture: ComponentFixture<AuthenticatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AuthenticatedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
