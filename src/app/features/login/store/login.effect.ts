import { Injectable } from '@angular/core';
import { AuthService } from '../../../core'; // from '../../../core/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import * as fromLoginActions from './login.action';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromRouter from '../../../store/actions/router.action';

@Injectable()
export class LoginEffects {
  constructor(
    private authenticationService: AuthService,
    private actions$: Actions
  ) {}
  @Effect()
  Login: Observable<
    fromLoginActions.All | fromRouter.Go
  > = this.actions$
    .ofType(fromLoginActions.LOGIN)
    .pipe(
      map((action: fromLoginActions.Login) => action.payload),
      switchMap(payload =>
        this.authenticationService
          .login(payload.user, payload.password)
          .pipe(
            mergeMap(res => [
              new fromLoginActions.LoginSuccess(res),
              new fromRouter.Go({ path: ['/app'] }),
            ]),
            catchError(error => of(new fromLoginActions.LoginFailed(error)))
          )
      )
    );
}
