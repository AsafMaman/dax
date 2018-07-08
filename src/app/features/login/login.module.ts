import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

import { StoreModule } from '@ngrx/store';
import { reducer, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  // MatButtonModule,
  // MatSelectModule,
  // MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    StoreModule.forFeature('login', reducer),
    EffectsModule.forFeature(effects),
  ],
  declarations: [LoginComponent, LoginFormComponent],
})
export class LoginModule {}
