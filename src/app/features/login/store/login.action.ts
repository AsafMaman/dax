import { Action } from '@ngrx/store';
import { User } from '../../../core/models/user.model'; // '../../../core/model/user.model';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILED = '[Auth] Login Failed';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { user: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: User) {}
}

export class LoginFailed implements Action {
  constructor(public payload: any) {}
  readonly type = LOGIN_FAILED;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type All = Login | LoginSuccess | LoginFailed | Logout;
