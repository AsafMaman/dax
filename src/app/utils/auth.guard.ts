import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import * as fromLoginStore from '../features/login/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private store: Store<fromLoginStore.LoginState>
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    this.store
      .select(fromLoginStore.getLoginIsLogin)
      .subscribe((res: boolean) => console.log('res:' + res));
    return this.store.select(fromLoginStore.getLoginIsLogin);
    // return true;
  }
}
