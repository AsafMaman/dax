import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

import { DataTablesModule } from 'angular-datatables';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    StoreModule.forFeature('dashboard', reducer),
    EffectsModule.forFeature(effects),
  ],
  declarations: [DashboardComponent, CardComponent],
})
export class DashboardModule {}
