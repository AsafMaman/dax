import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromFeatures from './features';
import { AuthenticatedComponent } from '././shared';
import { AuthGuard } from './utils/auth.guard';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: fromFeatures.LoginComponent },
  {
    path: 'app',
    component: AuthenticatedComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: fromFeatures.DashboardComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    EffectsModule.forFeature(effects),
    SharedModule,
    fromFeatures.features,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
