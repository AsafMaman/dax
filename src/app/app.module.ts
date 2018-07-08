import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { CustomSerializer } from './store/reducers';
import { AuthGuard } from './utils/auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './utils/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    CoreModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
