import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AuthenticatedComponent],
  exports: [AuthenticatedComponent],
})
export class SharedModule {}
