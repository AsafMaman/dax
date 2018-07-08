import * as fromLogin from './login.action';
import { User } from '../../../core';
import { createFeatureSelector } from '@ngrx/store';

export interface LoginState {
  userName: string;
  name: string;
  orgUnitId: string;
  rootId: string;
  isLogedIn: boolean;
  token: string;
  loading: boolean;
}

export const initialState: LoginState = {
  userName: '',
  name: '',
  orgUnitId: '',
  rootId: '',
  isLogedIn: false,
  token: '',
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromLogin.All
): LoginState {
  switch (action.type) {
    case fromLogin.LOGIN: {
      return { ...state, loading: true };
    }
    case fromLogin.LOGIN_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        userName: user.username,
        name: user.name,
        token: user.token,
        isLogedIn: true,
        loading: false,
        orgUnitId: user.orgUnitId,
        rootId: user.rootId,
      };
    }
    case fromLogin.LOGIN_FAILED: {
      return { ...state, loading: false };
    }
  }
  return state;
}
