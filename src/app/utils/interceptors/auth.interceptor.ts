import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { take, switchMap, flatMap, mergeMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromLoginStore from '../../../app/features/login/store';
import * as fromStore from '../../store/selectores';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromLoginStore.LoginState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(fromLoginStore.getLoginToken).pipe(
      take(1),
      flatMap(token => {
        if (token) {
          console.log(token);
          const req = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
          return next.handle(req);
        }
        return next.handle(request);
      })
    );
  }
}
