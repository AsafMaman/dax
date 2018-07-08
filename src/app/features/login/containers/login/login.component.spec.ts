import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from '../../component/login-form/login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { AuthService } from '../../../../core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<fromStore.LoginState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        StoreModule.forRoot({
          ...fromStore.reducer,
          feature: combineReducers(fromStore.reducer),
        }),
      ],
      providers: [AuthService],
      declarations: [LoginComponent, LoginFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  // store = TestBed.get(Store);
  // spyOn(store, 'dispatch').and.callThrough();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
